const express = require("express");
const router = express();
const multer = require('multer');
const moment = require('moment');
const {
  Colmena,
  Device,
  DeviceInput,
  EstadoGeneral,
  InformeMeteorologico,
  ManualColmena,
  ManualReina,
  ManualConsejos,
  Notas,
} = require("../models");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    file.mimetype.split("/")[1];
    if (file.mimetype.split("/")[1] === "mp3") cb(null, 'uploads/audios/')
    else cb(null, 'uploads/fotos/')

  },
  filename: function (req, file, cb) {
    // el D es DD? para un number como 23
    cb(null, moment().format("YYYY_MM_D_hh_mm_ss_SSS") + "_" + file.originalname);
  }
})

const upload = multer({ storage: storage })


// fijarse que req.user no es undefined
router.post("/photo", upload.single('photo'), (req, res, next) => {
  Colmena.create({ foto: req.file.filename })
    .then((newColmena) => {
      req.user.addColmena(newColmena)
      return newColmena
    })
    .then((newColmena) => {
      res.status(200).send(newColmena)
    })
})

router.post("/agregarColmenaEstandar/:idColmena", (req, res, next) => {
  Colmena.update({
    nombre: req.body.nombreColmena,
  },
    {
      where: {
        id: req.params.idColmena
      }
    }).then(data => res.status(200).send(data))
})

router.post("/audio", upload.single('audio'), (req, res, next) => {
  res.sendStatus(200);
});


router.post("/newDailyRegister", (req, res, next) => {
  const date = new Date();
  req.body.colmenasForm.date = date;
  req.body.colmenasForm.problemasSalud = []
  let colmenasForm = req.body.colmenasForm;

  Object.keys(colmenasForm).map(key => { // recorre el objeto
    if (typeof colmenasForm[key] === "boolean" && colmenasForm[key] === true) {
      colmenasForm.problemasSalud.push(key);
    }
  });

  ManualColmena.create(req.body.colmenasForm)
    .catch(err => {
      console.log(err);
    });

  const consejos = {};
  consejos.date = date;
  Object.assign(consejos, req.body.consejosCosecha) //copia el segundo parametro en el primero
  consejos.alimento = []
  consejos.intervenciones = []

  const consejosAlimento = req.body.consejosAlimento
  Object.keys(consejosAlimento).map(key => {  // recorre el objeto
    if (consejosAlimento[key] === true) {
      consejos.alimento.push(key);
    }
  });

  const consejosIntervenciones = req.body.consejosIntervenciones
  Object.keys(consejosIntervenciones).map(key => {  // recorre el objeto
    if (consejosIntervenciones[key] === true) {
      consejos.intervenciones.push(key);
    }
  });

  ManualConsejos.create(consejos)
    .then(data => {
      // console.log(data)
    })
    .catch(err => {
      console.log(err);
    });

  req.body.reinaForms.date = date
  ManualReina.create(req.body.reinaForms)
    .then(data => {
      // console.log(data)
    })
    .catch(err => {
      console.log(err);
    });

  req.body.estadoGeneral.date = date
  EstadoGeneral.create(req.body.estadoGeneral)
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err);
    });

  req.body.notasForms.date = date
  Notas.create(req.body.notasForms)
    .then(data => {
      console.log(data)
    })
    .catch(err => {
      console.log(err);
    });
});

router.get("/", (req, res) =>
  req.user.getColmena().then((colmenas) =>
    res.status(200).send(colmenas)
  ).catch((err) =>
    res.sendStatus(402)
  )
)

router.post("/agregarColmenaDevice", (req, res, next) => {
  Test.create({
    dataArduino: req.body,
  })
    .catch((err) =>
      res.send(err)
    )
})

module.exports = router;

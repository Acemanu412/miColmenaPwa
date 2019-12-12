const express = require("express");
const router = express();
const multer = require('multer');
const moment = require('moment');
const Sequelize = require("sequelize");
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

const Op = Sequelize.Op

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

router.post("/audio", upload.array('audio', 2), (req, res, next) => {
  res.send(req.files);
});

router.post("/agregarColmenaDevice/:idColmena", (req, res, next) => {

  Colmena.update({
    nombre: req.body.nombreColmena,
  },
    {
      where: {
        id: req.params.idColmena
      }
    }).then(async (updatedColmena) => {

      const newDevice = await Device.findOrCreate({ where: { MACadress: req.body.MACadress } })
        .then(dataArray => {
          if (dataArray[1]) {
            dataArray[0].MACadress = req.body.MACadress;
          }
          return dataArray[0];
        })
      newDevice.setColmena(updatedColmena)
      res.status(200).send(updatedColmena)
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

router.post("/newDailyRegister", (req, res, next) => {
  const date = req.body.estadoGeneral.fecha
  console.log("date", date);
  req.body.colmenasForm.date = date;
  req.body.colmenasForm.problemasSalud = []
  let colmenasForm = req.body.colmenasForm;
  console.log(req.body)
  Object.keys(colmenasForm).map(key => { // recorre el objeto
    if (typeof colmenasForm[key] === "boolean" && colmenasForm[key] === true) {
      colmenasForm.problemasSalud.push(key);
    }
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
  req.body.reinaForms.date = date
  req.body.estadoGeneral.date = date
  req.body.notasForms.date = date

  Colmena.findOne({ where: { id: req.body.colmenaId } }).then(async (colmena) => {
    await colmena.createManualcolmena(req.body.colmenasForm)
      .catch(err => {
        console.log(err);
      });
    await colmena.createManualconsejo(consejos).catch(err => {
      console.log(err);
    });
    await colmena.createManualreina(req.body.reinaForms).catch(err => {
      console.log(err);
    });
    await colmena.createNota(req.body.notasForms).catch(err => {
      console.log(err)
    });
    await colmena.createEstadoGeneral(req.body.estadoGeneral).catch(err => {
      console.log(err)
    });
  });

});

router.get("/", (req, res) =>
  req.user.getColmena().then((colmenas) =>
    res.status(200).send(colmenas)
  ).catch((err) =>
    res.sendStatus(402)
  )
)

router.post("/agregarDataDevice", (req, res, next) => {
  Test.create({
    dataArduino: req.body,
  })
    .catch((err) =>
      res.send(err)
    )
})

router.get("/deviceInput/:id", (req, res, next) => {
  const months = {
    Jan: "01", Feb: "02", Mar: "03", Apr: "04", May: "05", Jun: "06", Jul: "07",
    Aug: "08", Sep: "09", Oct: "10", Nov: "11", Dec: "12"
  }
  const dayVec = req.query.day.split(" ")
  const day = dayVec[2]
  const month = months[dayVec[1]]
  const year = dayVec[3]
  const start = `${year}-${month}-${day}`
  DeviceInput.findAll()
    .then(deviceInputs => deviceInputs.filter((deviceInput => {
      return (String(deviceInput.date).slice(0, 15) === req.query.day.slice(0, 15));
    })))
    .then(deviceInput => res.send(deviceInput[0]))
})

router.get("/registros/:id/:date", (req, res) => {
  console.log(req.params);
  Colmena.findOne({ 
    where: { id: req.params.id },
    include: [
      {
        model: EstadoGeneral,
        where: {
        date: req.params.date
        }
      },
      {
        model: ManualColmena,
        where: {
        date: req.params.date
        }
      },
      {
        model: ManualReina,
        where: {
        date: req.params.date
        }
      },
      {
        model: ManualConsejos,
        where: {
        date: req.params.date
        }
      },
      {
        model: Notas,
        where: {
        date: req.params.date
        }
      }
    ]
  }).then((colmena) => {
    console.log(colmena);
    res.status(200).send(colmena);
  }).catch(e => res.send(e))
})










module.exports = router;

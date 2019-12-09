const express = require("express");
const router = express();
const multer = require('multer');
const moment = require('moment');
const {
  Colmena,
  Device,
  DeviceInput,
  InformeMeteorologico,
  ManualColmena,
  ManualReina,
  ManualConsejos
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
  return (Colmena.create({
    foto: req.file.filename,
  }).then((newColmena) => {
    User.findOne({ where: { id: req.user.id } })
      .then((user) => {
        user.addColmena(newColmena)
        return newColmena;
      })
      .then((newColmenaActualizado) => res.status(200).send(newColmenaActualizado))
  }))
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
  req.body.colmenasForm.date = new Date()

  req.body.colmenasForm.problemasSalud = []

  let colmenasForm = req.body.colmenasForm;

  Object.keys(colmenasForm).map(key => {  // recorre el objeto
    if (typeof colmenasForm[key] === "boolean" && colmenasForm[key] === true) {
      colmenasForm.problemasSalud.push(key);
    }
  });

  console.log("--------------------------------------------")
  console.log(req.body)
  console.log("--------------------------------------------")


  ManualColmena.create(req.body.colmenasForm)
    .then(data => {
    })
    .catch(err => {
      console.log(err);
    });

  req.body.consejosForms.date = new Date()

  ManualConsejos.create(req.body.consejosForms)
    .then(data => {
      res.send(data)
    })
    .catch(err => {
      console.log(err);
      res.send("ERROR");
    });
});

router.get("/", (req, res) =>
  req.user.getColmena().then((colmenas) =>
    res.status(200).send(colmenas)
  ).catch((err) =>
    res.sendStatus(402)
  )
)

module.exports = router;

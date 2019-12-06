const express = require("express");
const router = express();
const multer = require('multer');
const moment = require('moment');
const { Colmena, } = require('../models');

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    file.mimetype.split("/")[1];
    if (file.mimetype.split("/")[1] === "mp3") cb(null, 'uploads/audios/')
    else cb(null, 'uploads/fotos/')

  },
  filename: function (req, file, cb) {
    cb(null, moment().format("YYYY_MM_D_hh_mm_ss_SSS") + "_" + file.originalname);
  }
})

const upload = multer({ storage: storage })

router.post("/photo", upload.single('photo'), (req, res, next) => {
  Colmena.create({
    foto: req.file.path,
    userId: req.user
  }).then(newColmena => {
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
})

router.get("/", (req,res) => {
  req.user.getColmena().then((colmenas) => {
    res.status(200).send(colmenas);
  }).catch((err) => {
    res.sendStatus(402)
  })

})

module.exports = router;

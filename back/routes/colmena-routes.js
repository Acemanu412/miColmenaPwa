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
    console.log(req.user);
    cb(null, 'uploads/')
  },
  filename: function (req, file, cb) {
    cb(null, moment().format("YYYY_MM_D_hh_mm_ss_SSS") + "_" + file.originalname);
  }
})

const upload = multer({ storage: storage })

router.post("/photo", upload.single('photo'), (req, res, next) => {
  console.log(req.user);
  console.log(Date.now());
  console.log(new Date());
  console.log(moment().format("YYYY_MM_D_hh_mm_ss"));
  console.log("your posting a photo!")
  console.log(req.file);
  res.sendStatus(200);
})

router.post("/audio", upload.single('audio'), (req, res, next) => {
  console.log(req.session);

  // console.log(req.user);
  // console.log(Date.now());
  // console.log(new Date());
  // console.log(moment().format("YYYY_MM_D_hh_mm_ss"));
  // console.log("sending audio!")
  // console.log(req.file);
  res.sendStatus(200);
});


router.post("/registroDiario", (req, res, next) => {

})

module.exports = router;
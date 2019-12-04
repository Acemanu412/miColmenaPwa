const express = require("express");
const router = express();
const multer = require('multer');
const moment = require('moment');

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      file.mimetype.split("/")[1];
      if(file.mimetype.split("/")[1] === "mp3") cb(null, 'uploads/audios/')
      else cb(null, 'uploads/fotos/')
      
    },
    filename: function (req, file, cb) {
      cb(null, moment().format("YYYY_MM_D_hh_mm_ss_SSS") + "_" + file.originalname);
    }
  })

const upload = multer({ storage: storage })

router.post("/photo", upload.single('photo'), (req,res,next) => {
    console.log(req.user);
    console.log(Date.now());
    console.log(new Date());
    console.log(moment().format("YYYY_MM_D_hh_mm_ss"));
    console.log("your posting a photo!")
    console.log(req.file);
    res.sendStatus(200);
})

module.exports = router;
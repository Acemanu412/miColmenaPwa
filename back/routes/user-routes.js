const express = require("express");
const router = express();
const { User } = require("../models");
const nodemailer = require("nodemailer");

router.post("/signup", (req, res, next) => {
  console.log("POSTBODY", req.body)
  User.create(req.body)
    .then((user) => {
      res.send(user);
    })
    .catch((err) => {
      console.log(err);
      res.send("ERROR");
    });
});

router.post("/olvidoClave", (req, res, next) => {
  //console.log(typeof req.body.email);
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then((user) => {
    let codigo = Math.floor(Math.random() * 1000000).toString();
    console.log(typeof codigo)
    user.update({ password: codigo }).then((user) => {
      user.setNewHashedPassword();
      var transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "micolmena555@gmail.com",
          pass: "jalea555!"
        }
      });

      var mailOptions = {
        from: "micolmena555@gmail.com",
        to: req.body.email,
        subject: "Forgot your password motherf@#&%!er",
        text: `Hey friend, this is your new temporary password: ${codigo}. After logging in go to settings to change your password.`
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          res.status(400).send(false)
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).send(true)
        }
      });
    });
  });
});

router.post("/nuevoClave", (req, res, next) => {
  if (req.body.password1 === req.body.password2) {
    req.user.update({ password: req.body.password1 }).then((user) => {
      req.user.setNewHashedPassword();
      res.status(200).send(user);
    });
  } else {
    res.status(400).send(false);
  }
});

module.exports = router;
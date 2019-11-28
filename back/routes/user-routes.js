const express = require("express");
const router = express();
const { User } = require("../models");
const nodemailer = require("nodemailer");
const passport = require("../config/passport");

router.post(
  "/session",
  (req, res, next) => {
    passport.authenticate("local", function(error, user, info) {
      if (error) {
        res.status(401).send(error);
      } else if (!user) {
        res.statusMessage = info.message;
        res.status(401).send(info.message);
      } else {
        next();
      }
    })(req, res);
  },
  function(req, res) {
    res.status(200).send(req.user);
  }
);

router.post("/signup", (req, res, next) => {
  User.create(req.body)
    .then(user => {
      console.log(user)
      User.findOne({
        where: {
          email: req.body.email,
        }
      })
    })
    .then(user => {
      console.log(user)

      const link = "http://localhost:3000/activarCuenta/"

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
        subject: "Mi colmena",
        text: `Ingrese al siguiente link para activar su cuenta: ${link}`
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          console.log(error);
          res.status(400).send(false);
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).send(true);
        }
      });
    })
    .then((user) => {

    })

});

router.post("/olvidoClave", (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    let codigo = Math.floor(Math.random() * 1000000).toString();


    user.update({ password: codigo }).then(user => {
      user.setNewHashedPassword();
      user.save();
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

      transporter.sendMail(mailOptions, function(error, info) {
        if (error) {
          console.log(error);
          res.status(400).send(false);
        } else {
          console.log("Email sent: " + info.response);
          res.status(200).send(true);
        }
      });
    });
  });
});

router.post("/nuevoClave", (req, res, next) => {
  if (req.body.password1 === req.body.password2) {
    req.user.update({ password: req.body.password1 }).then(user => {
      req.user.setNewHashedPassword();
      res.status(200).send(user);
    });
  } else {
    res.status(400).send(false);
  }
});

module.exports = router;

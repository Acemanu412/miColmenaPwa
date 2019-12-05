const express = require("express");
const router = express();
const nodemailer = require("nodemailer");

const passport = require("../config/passport");
const { User } = require("../models");

router.post(
  "/session",
  (req, res, next) => {
    passport.authenticate("local", function (error, user, info) {
      if (error) {
        res.status(401).send(error);
      } else if (!user) {
        res.status(401).send(info.message);
      } else {
       req.logIn(user, function(err) {
         if (err) {res.status(401).send("No se pudo abrir el session")}
         res.status(200).send(user);
       })
      }
    })(req, res);
  }
);

router.post("/signup", (req, res, next) => {
  return User.create(req.body)
    .then(user => {
      const link = `${process.env.IP}:2222/api/user/activarCuenta/${user.id}`
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "micolmena555@gmail.com",
          pass: "jalea555!"
        }
      });

      const mailOptions = {
        from: "micolmena555@gmail.com",
        to: user.email,
        subject: "Mi colmena",
        text: `Ingrese al siguiente link para activar su cuenta: ${link}`
      };

      transporter.sendMail(mailOptions, function (error, info) {
        if (error) {
          res.status(400).send(false);
        } else {
          res.status(200).send(true);
        }
      });
    })
    .catch((error) => {
      let mensaje;
      error.message.includes("invalid input syntax for integer")? mensaje = "Teléfono incluye caracteres no numéricos"
                                                                : mensaje = "Este correo ya está registrado";
      res.status(400).send(mensaje)
    })

});

router.get("/activarCuenta/:id", (req, res, next) => {
  User.findOne({
    where: {
      id: req.params.id
    }
  })
    .then((user) => {
      return user.update({ activated: true })
    })
    .then((user) => {
      req.login(user, function(err){
        err ? res.status(400).redirect(`http://${process.env.IP}:3000/`)
            : res.status(200).redirect(`http://${process.env.IP}:3000/home`)
      })
    })
    .catch((err) => {
      res.status(404).send(err);
    });
});

router.get("/logout", (req,res) => {
  console.log(req.user);
  req.logout();
  res.send(req.user);
})

router.post("/olvidoClave", (req, res, next) => {
  User.findOne({
    where: {
      email: req.body.email
    }
  }).then(user => {
    if (user) {
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
          subject: "Contraseña olvidada",
          text: `Hola, aća es tu nueva contraseña: ${codigo}. Despues de loggear va a ajustes para cambiar tu contraseña. \n Gracias, \n miColmena`
        };

        transporter.sendMail(mailOptions, function (error, info) {
          if (error) {
            res.status(400).send(false);
          } else {
            res.status(200).send(true);
          }
        });
      });
    }
    else {
      res.statusMessage = "No existe usuario con ese correo electrónico";
      res.status(401).send("No existe usuario con ese correo electrónico");
    }
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

const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
let User = require("../models/User")

passport.use(
  new LocalStrategy(
    {
      usernameField: "email",
      passwordField: "password"
    },
    function (inputEmail, inputPassword, done) {
      User.findOne({ where: { email: inputEmail } })
        .then((user) => {
          if (!user) {
            return done(null, false, { message: "Email incorrecto" });
          }
          if (!user.validPassword(inputPassword)) {
            return done(null, false, { message: "Password incorrecto" });
          }
          if (!user.activated) {
            return done(null, false, { message: "La cuenta no ha sido activada" })
          }
          return done(null, user);
        })
        .catch(done);
    }
  )
);

passport.serializeUser(function (user, done) {
  done(null, user.id);
});

passport.deserializeUser(function (id, done) {
  User.findByPk(id).then((user) => done(null, user));
});

module.exports = passport;
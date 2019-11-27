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
            return done(null, false, { message: "Incorrect username." });
          }
          if (!user.validPassword(inputPassword)) {
            return done(null, false, { message: "Incorrect password." });
          }
          if (!user.activated) {
            return done(null, false, { message: "Unactivated account." })
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
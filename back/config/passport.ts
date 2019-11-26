const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
let User = require("../models/User")

 passport.use(
   new LocalStrategy(
     {
      usernameField: "email",
      passwordField: "password" 
    },
    function (inputEmail:string, inputPassword:string, done:any) {
      User.findOne({ where: { email: inputEmail } })
        .then((user:any) => {
          if (!user) {
            return done(null, false, { message: "Incorrect username." });
          }
          if (!user.validPassword(inputPassword)) {
            return done(null, false, { message: "Incorrect password." });
          }
          return done(null, user);
        })
        .catch(done); 
    }
  )
);

 passport.serializeUser(function (user: any, done: any) {
   done(null, user.id);
 });


 passport.deserializeUser(function (id: number, done: any) {
  User.findByPk(id).then((user : any) => done(null, user));
});

module.exports = passport;
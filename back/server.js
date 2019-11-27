const express = require("express");
const app = express();
const path = require("path");
const routes = require("./routes");
const session = require("express-session"); // req.session || https://www.tutorialspoint.com/expressjs/expressjs_sessions.htm
const cookieParser = require("cookie-parser"); // req.cookies
const cors = require('cors'); // cors - para permitir 'cross origin resource sharing' || https://github.com/expressjs/cors
const {
  User,
  Colmena,
  DeviceInput,
  ManualColmena,
  ManualReina,
  ManualConsejos
} = require("./models");

const bodyParser = require("body-parser");

const db = require("./config/db");
const passport = require("./config/passport")


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "../front/public")));
app.use(cookieParser());
app.use(
  session({
    secret: "abeja",
    resave: true,
    saveUninitialized: true
  })
);
app.use(passport.initialize());
app.use(passport.session());
app.use(cors())
app.use("/api", routes);

// app.get("/*", (req: any, res: any) => {
//   res.sendFile(path.join(__dirname, "../front/public/index.html"));
// });

let port = process.env.PORT || 2222;
db.sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log("listening on port " + port);
    });
  })
  .catch((error) => {
    console.log(error);
  });

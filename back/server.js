const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const express = require("express");
const app = express();
const session = require("express-session");
const morgan = require("morgan");
const passport = require("passport");
const path = require("path");
const db = require("./config/db");
const routes = require("./routes");

app.use(function (req, res, next) {
  let allowedOrigins = [`http://10.100.0.69:2222`, `http://localhost:2222`];
  let origin = req.headers.origin;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.use(express.static(path.join(__dirname, "/uploads/")));
app.use(morgan("dev"));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(
  session({
    secret: "abeja",
    resave: true,
    saveUninitialized: true,
  })
);
app.use(passport.initialize());
app.use(passport.session());

app.use("/api", routes);

app.get('*', function(req, res) {
  res.sendFile(path.resolve(__dirname, 'uploads/index.html'));
});

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

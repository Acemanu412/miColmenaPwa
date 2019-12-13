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

// Este middleware nos garantiza que no haya errores de CORS. Si se reciben errores de CORS en Firefox, recomendamos rehacer
// la prueba en Chrome, ya que Firefox envía errores de CORS cuando tiene algún conflicto el certificado SSL.

app.use(function (req, res, next) {
  let allowedOrigins = [req.headers.origin, req.headers.host];
  let origin = req.headers.origin || req.headers.host;
  if (allowedOrigins.indexOf(origin) > -1) {
    res.setHeader('Access-Control-Allow-Origin', origin);
  }
  res.header('Access-Control-Allow-Credentials', true);
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

// Una carpeta estática se utiliza para levantar el paquete del front y la otra se utiliza para los audios e imágenes.

app.use(express.static(path.resolve("../front/build")));
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

// Alterar el orden siguiente causará que no sean posibles pedidos a la rutas del back.

app.use("/api", routes);

app.get('*', function (req, res) {
  res.sendFile(path.resolve("../front/build/index.html"));
});

let port = process.env.PORT || 8080;
db.sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log("listening on port " + port);
    });
  })
  .catch((error) => {
    console.log(error);
  });

export{};

const express = require("express");
const app = express();
const path = require("path");
const session = require("express-session"); // req.session || https://www.tutorialspoint.com/expressjs/expressjs_sessions.htm
const cookieParser = require("cookie-parser"); // req.cookies
const bodyParser = require("body-parser");

const db = require("./config/db");
// const routes = require("./routes");
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

// app.use("/api", routes);

// app.get("/*", (req: any, res: any) => {
//   res.sendFile(path.join(__dirname, "../front/public/index.html"));
// });

let port = process.env.PORT || 7777;
db.sync({ force: false })
  .then(() => {
    app.listen(port, () => {
      console.log("listening on port 7777");
    });
  })
  .catch((error: any) => {
    console.log(error);
  });

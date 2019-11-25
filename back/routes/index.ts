export {};
const express = require("express");
const router = express();
const {
  User,
  Colmena,
  DeviceInput,
  ManualColmena,
  ManualReina,
  ManualConsejos
} = require("../models");

router.post("/signup", (req: any, res: any, next: any) => {
  User.create(req.body)
    .then((user: any) => {
      res.send(user);
    })
    .catch((err: any) => {
      console.log(err);
      res.send("ERROR");
    });
});

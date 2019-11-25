export {};
const express = require("express");
const router = express();
const User: any = require("../models/User");

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

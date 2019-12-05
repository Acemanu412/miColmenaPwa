const { User } = require("../models/index");

User.create({
    email: "erikaastef99@gmail.com",
    password: "123abc",
    username: "supererika",
    activated: false
}).then((user) => {
    console.log("Here is super Erika:" + user);
})

User.create({
    email: "jsmilbank@gmail.com",
    password: "123abc",
    username: "jared",
    activated: true
}).then((user) => {
    console.log("Made Jared:" + user);
})
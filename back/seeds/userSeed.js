const { User } = require("../models/index");

User.create({
    email: "erikaastef99@gmail.com",
    password: "123abc",
    username: "supererika",
    activated: false
})

User.create({
    email: "jsmilbank@gmail.com",
    password: "123abc",
    username: "jared",
    activated: true
})
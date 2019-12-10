const { User } = require("../models/index");

User.create({
    email: "erikaastef99@gmail.com",
    password: "1234",
    telefono: 1166074332,
    username: "supererika",
    activated: true
}).then(() => { console.log("createed") }).catch((e) => { console.log(e, "erroooorr") })

User.create({
    email: "jsmilbank@gmail.com",
    password: "123abc",
    username: "jared",
    activated: true
})
const {User} = require("../models/index");

User.create({
    email: "erikaastef99@gmail.com",
    password: "123abc",
    username: "supererika",
    activated: false
}).then((user)=>{
    console.log("Here is super Erika:" + user);
})
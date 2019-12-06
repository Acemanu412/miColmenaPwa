const { Colmena } = require("../models/index");
const { User } = require("../models/index")

Colmena.bulkCreate([
    { nombre: "colmena1", foto: "abejas@2x.png", device: true },
    { nombre: "colmena2", foto: "abejas1@2x.png", device: false },
    { nombre: "colmena3", foto: "abejas2@2x.png", device: false },
]).then((colmenas)=>{
    User.findOne({where:{email: "jsmilbank@gmail.com"}}).then((user) => {
        user.addColmena(colmenas).then(() => {
            console.log("added colmenas to user")
            process.exit();
        })
    })
    
});


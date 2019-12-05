const { Colmena } = require("../models/index");
const { User } = require("../models/index")

Colmena.bulkCreate([
    { nombre: "colmena1", foto: "/uploads/fotos/abejas@2x.png", device: true },
    { nombre: "colmena2", foto: "/uploads/fotos/abejas1@2x.png", device: false },
    { nombre: "colmena3", foto: "/uploads/fotos/abejas2@2x.png", device: false },
]).then((colmenas)=>{
    console.log("colmenas creadas");
    User.findOne({where:{email: "jsmilbank@gmail.com"}}).then((user) => {
        user.addColmena(colmenas).then(() => {
            console.log("added colmenas to user")
            process.exit();
        })
    })
    
});


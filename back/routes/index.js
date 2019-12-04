const express = require("express");
const router = express();

const colmenaRoutes = require("./colmena-routes")
const userRoutes = require("./user-routes");

router.use("/user", userRoutes);
router.use("/colmena", colmenaRoutes)

module.exports = router;

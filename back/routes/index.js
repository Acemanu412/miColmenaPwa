const express = require("express");
const router = express();

const userRoutes = require("./user-routes");

router.use("/user", userRoutes);

module.exports = router;

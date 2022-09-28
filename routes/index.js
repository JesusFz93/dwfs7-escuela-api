const express = require("express");
const router = express.Router();
const materiaRouter = require("./Materia.route");
const alumnoRouter = require("./Alumno.route");

router.use("/materia", materiaRouter);
router.use("/alumno", alumnoRouter);

module.exports = router;

const express = require("express");
const router = express.Router();

const {
  obtenerAlumnos,
  crearAlumno,
  actualizarAlumno,
  eliminarAlumno,
} = require("../controllers");

router.get("/", obtenerAlumnos);

router.post("/", crearAlumno);

router.put("/", actualizarAlumno);

router.delete("/", eliminarAlumno);

module.exports = router;

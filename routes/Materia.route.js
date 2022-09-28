const express = require("express");
const router = express.Router();

const {
  mostrarMaterias,
  crearMateria,
  actualizarMateria,
  eliminarMateria,
} = require("../controllers");

router.get("/", mostrarMaterias);

router.post("/", crearMateria);

router.put("/:id", actualizarMateria);

router.delete("/:id", eliminarMateria);

module.exports = router;

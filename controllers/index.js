const {
  obtenerAlumnos,
  crearAlumno,
  actualizarAlumno,
  eliminarAlumno,
} = require("./Alumno.controller");

const {
  mostrarMaterias,
  crearMateria,
  actualizarMateria,
  eliminarMateria,
} = require("./Materia.controller");

module.exports = {
  obtenerAlumnos,
  crearAlumno,
  actualizarAlumno,
  eliminarAlumno,
  mostrarMaterias,
  crearMateria,
  actualizarMateria,
  eliminarMateria,
};

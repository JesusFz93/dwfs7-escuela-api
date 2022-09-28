const mongoose = require("mongoose");
const Alumno = mongoose.model("Alumno");

const obtenerAlumnos = async (req, res) => {
  const alumnos = await Alumno.find();

  return res.json({
    msg: "Mostrando lista de alumnos",
    data: alumnos,
  });
};

const crearAlumno = async (req, res) => {
  const { nombre, apellido, edad } = req.body;

  const nuevoAlumno = {
    nombre,
    apellido,
    edad,
  };

  const alumno = new Alumno(nuevoAlumno);
  const alumnoGuardado = await alumno.save();

  return res.status(201).json({
    msg: "Alumno creado",
    data: alumnoGuardado,
  });
};

const actualizarAlumno = (req, res) => {
  return res.json({
    msg: "Alumno actualizado",
  });
};

const eliminarAlumno = (req, res) => {
  return res.json({
    msg: "Alumno eliminado",
  });
};

module.exports = {
  obtenerAlumnos,
  crearAlumno,
  actualizarAlumno,
  eliminarAlumno,
};

const mongoose = require("mongoose");

const AlumnoSchema = new mongoose.Schema({
  nombre: {
    type: String,
    require: true,
  },
  apellido: {
    type: String,
    default: "Sin declarar",
  },
  edad: {
    type: Number,
  },
});

mongoose.model("Alumno", AlumnoSchema, "coleccionAlumno");

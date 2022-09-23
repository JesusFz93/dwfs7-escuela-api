require("dotenv").config();
const express = require("express");
const app = express();
const PORT = process.env.PORT || 4007;

app.use(express.json());

app.get("/", (req, res) => {
  return res.json({
    msg: "Bienvenido a mi backend",
    autor: process.env.AUTOR,
  });
});

app.get("/materias", (req, res) => {
  return res.json({
    msg: "Mostrando lista de materias",
  });
});

app.post("/materias", (req, res) => {
  const { nombre, descripcion, creditos } = req.body;

  //   const { nombre, descripcion, creditos } = req.headers;

  //   const { nombre, descripcion, creditos } = req.params;
  // /materias/:nombre/:descripcion/:creditos/:profesor
  // localhost:4007/materias/Matematicas/Materia de numeros/5

  //   /materias
  //   localhost:4007/materias?nombre=Matematicas&descripcion=Materia+de+numeros&creditos=4
  //   const { nombre, descripcion, creditos } = req.query;

  //   console.log("modufucaic")

  const nuevaMateria = {
    nombre,
    descripcion,
    creditos,
  };

  return res.json({
    msg: "Creando una materia",
    data: nuevaMateria,
  });
});

app.put("/materias/:id", (req, res) => {
  const { id } = req.params;
  const { nombre, descripcion, creditos } = req.body;

  const actualizarMateria = {
    nombre,
    descripcion,
    creditos,
  };

  return res.json({
    msg: `Materia con el id ${id} actualizada`,
    data: actualizarMateria,
  });
});

app.delete("/materias/:id", (req, res) => {
  const { id } = req.params;
  return res.json({
    msg: `Materia con el id ${id} eliminada`,
    data: {},
  });
});

app.get("/alumnos", (req, res) => {
  return res.json({
    msg: "Mostrando lista de alumnos",
  });
});

app.post("/alumnos", (req, res) => {
  return res.json({
    msg: "Alumno creado",
  });
});

app.put("/alumnos", (req, res) => {
  return res.json({
    msg: "Alumno actualizado",
  });
});

app.delete("/alumnos", (req, res) => {
  return res.json({
    msg: "Alumno eliminado",
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

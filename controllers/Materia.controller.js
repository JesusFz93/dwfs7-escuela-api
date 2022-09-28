const mostrarMaterias = (req, res) => {
  return res.json({
    msg: "Mostrando lista de materias",
  });
};

const crearMateria = (req, res) => {
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
};

const actualizarMateria = (req, res) => {
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
};

const eliminarMateria = (req, res) => {
  const { id } = req.params;
  return res.json({
    msg: `Materia con el id ${id} eliminada`,
    data: {},
  });
};

module.exports = {
  mostrarMaterias,
  crearMateria,
  actualizarMateria,
  eliminarMateria,
};

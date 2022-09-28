require("dotenv").config();
require("./models");
const express = require("express");
const mongoose = require("mongoose");
const app = express();
const PORT = process.env.PORT || 4007;
const routes = require("./routes");

app.use(express.json());

mongoose.connect(process.env.URI_MONGO);

app.use("/v1", routes);

app.get("/", (req, res) => {
  return res.json({
    msg: "Bienvenido a mi backend",
    autor: process.env.AUTOR,
  });
});

app.listen(PORT, () => {
  console.log(`Servidor iniciado en el puerto ${PORT}`);
});

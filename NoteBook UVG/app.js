const BodyParser = require("body-parser");
const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const morgan = require("morgan");


//Settings
app.set("port", process.env.PORT || 2020);
const Studentsroutes = require(path.join(__dirname, "routes", "students.js"));
const Clubsroutes = require(path.join(__dirname, "routes", "clubs.js"));

//middlewares
app.use(morgan("dev"));
app.use(BodyParser.urlencoded({ extended: true }));
app.use(BodyParser.json());


//routes
app.use("/", Studentsroutes);
app.use("/", Clubsroutes);

app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));


//MongoDB Conection
mongoose.connect("mongodb://localhost/UVG", { useNewUrlParser: true })
    .then(db => console.log("Conexion Exitosa a MondoDB"))
    .catch(err => console.log("Conexion Fallida a MongoDB"));

app.listen(app.get("port"), () => {
    console.log(`Iniciando Servidor en el puerto ${app.get("port")}`);
})
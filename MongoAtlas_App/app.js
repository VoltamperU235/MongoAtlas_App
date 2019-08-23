const BodyParser = require("body-parser")
const express = require("express");
const app = express();
const path = require("path");
const morgan = require("morgan");
const mongoose = require("mongoose");

//middlewares
app.use(morgan("dev")); 
app.use(express.static(path.join(__dirname,"public")));
app.use(BodyParser.urlencoded({extended: true}));
app.use(BodyParser.json());
//
//routes
const indexRoutes = require(path.join(__dirname,"routes","index.js"))
app.use("/",indexRoutes);


//settings
app.set("port", process.env.PORT || 8000);
app.set("views", path.join(__dirname,"views"));
app.set("view engine", "ejs");


//conectando a la base de datos

mongoose.connect('mongodb+srv://admin:FBx_admin2012@cluster0-kkulr.gcp.mongodb.net/test?retryWrites=true&w=majority', {useNewUrlParser: true})
.then( db => console.log("Conectado Exitosamente"))
.catch(err => console.log("Error de conexion"));

app.listen(app.get("port"),() => {
    console.log("Serving Page");
    console.log(`Server on port ${app.get("port")}`);
})


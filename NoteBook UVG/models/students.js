const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const studentSchema = new Schema({
    carnet: String,
    full_name: String,
    carrera: String,
    telefono: Number,
    correo_electronico: String,
    fecha_nacimiento: String,
    edad: Number,
    sexo: String,
    status: String,
    club: [String],
    taller: [String]
})

module.exports = mongoose.model("estudiantes", studentSchema);
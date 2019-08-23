const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const clubesSchema = new Schema({
    full_name: String,
    description: String,
    evento: String,
})

module.exports = mongoose.model("clubes", clubesSchema);
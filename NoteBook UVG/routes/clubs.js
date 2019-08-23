const express = require("express");
const router = express.Router();
const multer = require("multer");
const Club = require("../models/clubes")


var storage = multer.diskStorage({
    destination: function(req, file, cb) {
        cb(null, "/home/dennix/Escritorio/NoteBook\ UVG/public/uploads/");
    },
    filename: function(req, file, cb) {
        cb(null, req.body.full_name.replace(/ /g, "_"));
    }
})

const upload = multer({
    storage: storage
});

router.get("/clubs", async(req, res) => {
    var clubs = await Club.find();
    res.render("clubs", {
        clubs
    });
});


router.post("/club/add", upload.single('Imagen'), async(req, res) => {

    const newclub = new Club(req.body);
    try {
        await newclub.save();
        res.redirect("/clubs");
    } catch (error) {
        res.send(false);

    }
});






module.exports = router;
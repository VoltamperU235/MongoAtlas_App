const express = require("express");
const router = express.Router();

const Students = require("../models/students")
const Clubes = require("../models/clubes")


router.get("/", (req, res) => {
    res.render("index", {
        tasks: {}
    });
});

router.get("/students", async(req, res) => {
    const clubes = await Clubes.find();
    var students = await Students.find();
    students = students.reverse();

    res.render("students", {
        category: "Buscar por Club o Taller",
        extra_button: false,
        students,
        clubes
    });
});

router.get("/student/delete/:id", async(req, res) => {
    const { id } = req.params;
    await Students.deleteMany({ _id: id });
    res.send("1")
});

router.post("/student/add", async(req, res) => {
    var params = req.body;
    const student = new Students(req.body);
    console.log(params);
    try {
        await student.save();
        res.send(true);
    } catch (error) {
        res.send(false);
        console.log(error);
    }
});

router.post("/student/add/:id", async(req, res) => {
    const { id } = req.params;
    console.log("edicion activada");
    console.log(id);
    console.log(req.body);

    var modification = req.body;
    console.log(modification.club);
    modification.club !== undefined ? modification = modification : modification.club = [];
    modification.taller !== undefined ? taller = taller : modification.taller = [];
    console.log(modification.club);


    try {
        await Students.update({ _id: id }, modification);
        res.send(true);
    } catch (error) {
        res.send(false);

    }

});

router.get("/search/student/club/:id", async(req, res) => {

    var { id } = req.params;
    //id = id.replace(/ /g, "_");
    var search = await Students.find({ club: id });
    console.log(search)
    const clubes = await Clubes.find();
    search = search.reverse();

    res.render("students", {
        category: id,
        extra_button: true,
        students: search,
        clubes
    });
});









module.exports = router;
const catchEm = require('../utils/utility')
const express = require('express');
const router = express.Router();
const ProjectModel = require("../model/project")


router.post('/project', async (req, res) => {
    const data = new ProjectModel({
        name: req.body.name
    })
    const dataToSave = await data.save();
    res.status(201).json(dataToSave)
})


router.get('/projects', async function (req, res) {
    let data = []
    try {
        if (req.query["show_all"] === "true") {
            data = await ProjectModel.find();
        } else {
            data = await ProjectModel.find({"deleted": false});
        }
    } catch (e) {
        res.status(500).json({"error": e.message})
        return
    }
    res.json(data)
});


router.route('/project/:id')
    .delete(async (req, res) => {
        await req.doc.updateOne({deleted: true})
        res.status(202).json({"msg": "remove success"})
    })
    .put(async (req, res) => {
        if (!req.body.name) {
            res.status(400).json({"msg": "param name need"})
            return
        }
        if (req.body.name !== req.doc.name) {
            await req.doc.updateOne({name: req.body.name})
        }
        res.status(202).json({"msg": "update success"})
    })

router.param("id", async (req, res, next, id) => {
    const [err, data] = await catchEm(ProjectModel.findOne({"_id": id}).orFail())
    if (err) {
        console.log(`doc not found with id ${id}, err ${err.message}`)
        res.status(204).json({"msg": "doc not found"})
        return
    }
    req.doc = data
    next()
})
module.exports = router;

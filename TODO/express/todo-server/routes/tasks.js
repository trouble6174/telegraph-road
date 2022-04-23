const catchEm = require('../utils/utility')
const express = require('express');
const router = express.Router();
const TaskModel = require("../model/task")


router.post('/task', async (req, res) => {
    const data = new TaskModel({
        name: req.body.name,
        projectId: req.body.projectId
    })
    const dataToSave = await data.save();
    res.status(201).json(dataToSave)
})


router.get('/tasks', async function (req, res) {
    let data = []
    let queryFilter = {"deleted": false}
    if (req.query["show_all"] === "true") {
        queryFilter = {}
    }
    if (req.query.hasOwnProperty("projectId")) {
        queryFilter = {projectId: req.query.projectId}
    }
    try {
        data = await TaskModel.find(queryFilter)
    } catch (e) {
        res.status(500).json({"error": e.message})
        return
    }
    res.json(data)
});


router.route('/task/:id')
    .delete(async (req, res) => {
        const doc = req.doc
        doc.deleted = true
        await doc.save()
        res.status(202).json({"msg": "remove success"})
    })
    .put(async (req, res) => {
        if (!req.body.name || !req.body.projectId) {
            res.status(400).json({"msg": "param name or projectId need"})
            return
        }
        const doc = req.doc
        let updateMap = {updatedTime: Date.now()}
        if (req.body.name && req.body.name !== doc.name) {
            updateMap.name = req.body.name
        }
        if (req.body.projectId && req.body.projectId !== doc.projectId) {
            updateMap.projectId = req.body.projectId
        }
        await req.doc.updateOne(updateMap)
        res.status(202).json({"msg": "update success"})
    })

router.route('/task/:id/status/')
    .put(async (req, res) => {
        if (!req.body.status) {
            res.status(400).json({"msg": "param status need"})
            return
        }
        if (req.body.status === "finished") {
            await req.doc.updateOne({isFinished: true, finishedTime: Date.now()})
        } else {
            await req.doc.updateOne({isFinished: false, finishedTime: null})
        }
        res.status(202).json({"msg": "update success"})
    })

router.param("id", async (req, res, next, id) => {
    const [err, data] = await catchEm(TaskModel.findOne({"_id": id}).orFail())
    if (err) {
        console.log(`doc not found with id ${id}, err ${err.message}`)
        res.status(204).json({"msg": "doc not found"})
        return
    }
    req.doc = data
    next()
})
module.exports = router;

const express = require('express');
const router = express.Router();
const EventModel = require("../model/event")


router.get('/events', async function (req, res) {
    let data = []
    try {
        if (req.query["get_latest"] === "true") {
            data = await EventModel.find().sort({$natural: -1}).limit(1);
        } else {
            data = await EventModel.find();
        }
    } catch (e) {
        res.status(500).json({"error": e.message})
        return
    }
    res.json(data)
});


module.exports = router;

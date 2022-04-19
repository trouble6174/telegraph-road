const express = require('express')
const router = express.Router();
const members = require("../../membersConst");
const uuid = require('uuid')

// get all members
router.get('/members', (req, res) => {
    res.json(members)
})

// get single member
router.get('/member/:id', (req, res) => {
    const member = members.find(x => x.id.toString() === req.params.id)
    member ? res.json(member) : res.status(404).json({msg: `No member with the id of ${req.params.id}`})
})

// post
router.post('/member', (req, res) => {
    res.send({"uuid": uuid.v4()})
})
module.exports = router
const mongoose = require('mongoose');
const schema = new mongoose.Schema({
    type: {
        type: String,
        required: true
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
    info: String
});
schema.static('createEvent', function (eventType, eventInfo) {
    const doc = new this({
        type: eventType,
        info: eventInfo,
    });
    doc.save();
})
const model = mongoose.model('Event', schema);
model.types = {
    addTask: "atk",
    removeTask: "rtk",
    updateTask: "utk",
    addProject: "apj",
    removeProject: "rpj",
    updateProject: "upj",
    markAsFinished: "maf",
    markAsUnfinished: "mau",
}
module.exports = model

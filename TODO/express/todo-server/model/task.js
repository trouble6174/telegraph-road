const mongoose = require('mongoose');
const EventModel = require("./event");
const taskSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    projectId: {
        type: String,
        required: true
    },
    createdTime: {
        type: Date,
        default: Date.now
    },
    updatedTime: Date,
    finishedTime: Date,
    isFinished: {
        type: Boolean,
        default: false
    },
    deleted: {
        type: Boolean,
        default: false
    }
});
taskSchema.post('save', function (doc) {
    EventModel.createEvent(EventModel.types.addTask, `added task "${doc.name}"`)
});
taskSchema.post('updateOne', function () {
    const updatedFields = this.getUpdate().$set
    if (updatedFields.hasOwnProperty("deleted") && updatedFields.deleted) {
        EventModel.createEvent(EventModel.types.removeTask, `removed task ${this.getQuery()._id}`)
    } else if (updatedFields.hasOwnProperty("status")) {
        if (updatedFields.status === "finished") {
            EventModel.createEvent(EventModel.types.markAsFinished, `mark task ${this.getQuery()._id} unfinished`)
        } else {
            EventModel.createEvent(EventModel.types.markAsUnfinished, `mark task ${this.getQuery()._id} unfinished`)
        }
    } else {
        EventModel.createEvent(EventModel.types.updateTask, `updated task ${this.getQuery()._id}`)
    }
});
module.exports = mongoose.model('Task', taskSchema);

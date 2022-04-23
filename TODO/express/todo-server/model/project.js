const mongoose = require('mongoose');
const EventModel = require('./event')
const projectSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    deleted: {
        type: Boolean,
        default: false
    },
    createdTime: {
        type: Date,
        default: Date.now
    }
});
projectSchema.post('save', function (doc) {
    EventModel.createEvent(EventModel.types.addProject, `added project "${doc.name}"`)
});
projectSchema.post('updateOne', function () {
    const updatedFields = this.getUpdate().$set
    if (updatedFields.hasOwnProperty("deleted") && updatedFields.deleted) {
        EventModel.createEvent(EventModel.types.removeProject, `removed Project ${this.getQuery()._id}`)
    } else {
        EventModel.createEvent(EventModel.types.updateProject, `updated Project ${this.getQuery()._id}`)
    }
});
module.exports = mongoose.model('Project', projectSchema);

const mongoose = require("mongoose");

const AssignedDrillSchema = new mongoose.Schema({
    title: { type: String, require: true },
    category: { type: Number, require: true },
    repetation: { type: Number, require: true },
    sets: { type: Number, require: true },
    videos: [{ type: String, require: true }],
    assignedBy: { type: String }

}, { timestamps: true });

module.exports = mongoose.model("AssignedDrill", AssignedDrillSchema)
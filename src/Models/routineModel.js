const mongoose = require("mongoose");

const drillSchema = new mongoose.Schema({
    userId: { type: String },
    routineId: { type: String },
    drills: { type: String, require: true },
    date: { type: String, require: true },
    time: { type: String, require: true },
    category: { type: Number, require: true },
    repetation: { type: Number, require: true },
    sets: { type: Number, require: true },
    drill_id: { type: String, require: true },
    isCompleted: { type: Boolean, default: false }

}, { timestamps: true });

module.exports = mongoose.model("routine", drillSchema)
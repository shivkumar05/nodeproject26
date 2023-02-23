const mongoose = require("mongoose");

const DrillSchema = new mongoose.Schema({
    title: { type: String, require: true },
    category: { type: Number, require: true },
    repetation: { type: Number, require: true },
    sets: { type: Number, require: true },
    videos: [{ type: String, require: true }],
    userId: { type: String },
    isCompleted: { type: Boolean, default: false }

}, { timestamps: true });

module.exports = mongoose.model("MyDrill", DrillSchema)
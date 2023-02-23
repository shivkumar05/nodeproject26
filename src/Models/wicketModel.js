const mongoose = require("mongoose")

const wicketSchema = new mongoose.Schema({
    userId: { type: String, require: true },
    level: { type: Number, require: true }

}, { timestamps: true });

module.exports = mongoose.model("wicket", wicketSchema)


const mongoose = require("mongoose")

const bow_batSchema = new mongoose.Schema({
    userId: { type: String, require: true },
    bat_hand: { type: String, require: true },
    bowl_hand: { type: String, require: true },
    batting_order: { type: String, require: true },
    bowling_order: { type: String, require: true },
    wicket_keeper: { type: String, require: true }

}, { timestamps: true });

module.exports = mongoose.model("bow_bat", bow_batSchema)


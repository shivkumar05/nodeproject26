const mongoose = require("mongoose");

const jwtTokenSchema = new mongoose.Schema({
    userId: { type: String },
    token: { type: String }

}, { timestamps: true });

module.exports = mongoose.model("jwtToken", jwtTokenSchema)
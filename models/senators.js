const mongoose = require("mongoose");

const senatorsSchema = mongoose.Schema({
    name: String,
    constituency: String,
    party: String,
    state: String,
    phone: String,
    email: String,
    website: String
});

module.exports = mongoose.model('Senators', senatorsSchema);
const mongoose = require("mongoose");

const horsSchema = mongoose.Schema({
    name: String,
    constituency: String,
    party: String,
    state: String,
    phone: String,
    email: String,
    website: String
});

module.exports = mongoose.model('HORs', horsSchema);
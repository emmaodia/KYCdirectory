const mongoose = require("mongoose");

const policeSchema = mongoose.Schema({
    federal: {
        OC: String,
        TwoIC: String,
        UnitName: String,
        state: String,
        phone: String,
        email: String,
        website: String
    },
    area: {
        OC: String,
        TwoIC: String,
        UnitName: String,
        stateName: String,
        phone: String,
        email: String,
        website: String
    },
    state: {
        OC: String,
        TwoIC: String,
        UnitName: String,
        stateName: String,
        phone: String,
        email: String,
        website: String
    }
});

module.exports = mongoose.model('POLICE', policeSchema);
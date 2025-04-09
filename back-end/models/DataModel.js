const mongoose = require('mongoose');

const DataSchema = new mongoose.Schema({
    date: Date,
    emission_kg: Number
});

module.exports = mongoose.model('Data', DataSchema);

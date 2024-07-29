const mongoose = require('mongoose');

const docSchema = new mongoose.Schema({
    id:Number,
    title: String,
    itemArray:Array
});

module.exports = mongoose.model('Document', docSchema);
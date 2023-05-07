const mongoose = require('mongoose');

const BookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    editor: {
        type: String,
        required: true        
    },
    coverUrl: {
        type: String,
        required: true        
    }
});

module.exports = mongoose.model('book', BookSchema);
const mongoose = require('mongoose');

const blogSchema = mongoose.Schema({
    title: {
        type: String,
        required: true
    },
    description:{
        type: String,
        require: true
    },
    author:{
        type: String,
        required: true
    }
});

module.exports = mongoose.model('blogsdbs',blogSchema);
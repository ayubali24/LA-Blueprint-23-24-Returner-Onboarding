const mongoose = require('mongoose');

const postSchema = new mongoose.Schema({
  username: {
    required: true,
    type: String,
  },
  body: {
    required: true,
    type: String,
  },
  time: {
    required: true,
    type: String,
  },
});

module.exports = mongoose.model('Post', postSchema);

const mongoose = require('mongoose')


const postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: false
  },
  body: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
  },
  tags: {
    type: Array,
    required: false
  }
})

module.exports = mongoose.model('posts', postSchema)
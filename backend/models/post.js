const mongoose = require('mongoose');

const PostSchema = mongoose.Schema({
  title:{
    type: String,
    required: true,
    unique: true
  },
  description:{
    type: String,
    required: true
  },
  username:{
    type: String,
    required: true
  },
  photo:{
    type: String,
    required: false
  },
  categories:{
    type: Array,
    required: false
  }
}, {timestamps: true});

const Post = mongoose.model('Post', PostSchema);
module.exports = Post;
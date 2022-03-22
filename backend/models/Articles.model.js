const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
  name:{
    type: String,
    required: true
  },
  email:{
    type: String,
    required: true
  },
  password:{
    type: String,
    required: true
  },
  date:{
    type: Date,
    default: Date.now()
  }
})

const Article = mongoose.model('Article', ArticleSchema);
module.exports = Article;
const mongoose = require('mongoose');

const ArticleSchema = mongoose.Schema({
  title:{
    type: String,
    required: true
  },
  description:{
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
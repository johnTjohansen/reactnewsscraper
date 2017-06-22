// Headline model
// ==============

// Require mongoose
var mongoose = require("mongoose");

// Create a schema class using mongoose's schema method
var Schema = mongoose.Schema;

// Create the headlineSchema with our schema class
var ArticleSchema = new Schema({
  // title of article
  title: {
    type: String,
    required: true,
    unique: true
  },
  // date & time article published
  pubDate: 
    type: String,
    default: false
  }
  // article URL
  url: {
    type: String,
    required: true
  },

});

// Create the Article model using the ArticleSchema
var Articles = mongoose.model("nytReact", ArticleSchema);

// Export the Article model
module.exports = Articles;
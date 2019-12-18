const mongoose = require('mongoose');
const Schema   = mongoose.Schema;

const recipeSchema = new Schema({
  title: { type: String },
  level: { type: String },
  ingredients: { type: Array },
  cuisine: { type: String },
  dishType: { type: String },
  image: { type: String, default: 'https://images.media-allrecipes.com/images/75131.jpg.'},
  duration: { type: Number },
  creator: { type: String },
  created: { type: Date, default: Date.now }
}, {
  timestamps: true
});

const Recipe = mongoose.model('Recipe', recipeSchema);
module.exports = Recipe;
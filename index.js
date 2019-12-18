const mongoose = require('mongoose')
const Recipe = require('./models/Recipe')
const data = require('./data.js');

mongoose
  .connect('mongodb://localhost/recipeApp', {
    useNewUrlParser: true
  })
  .then(() => console.log(`Connected to Mongo!`))
  .catch(err => console.error('Error connecting to mongo', err));

const myRecipe = new Recipe({
  title: 'Fricassê',
  level: 'Facil',
  ingredients: [
    '1 lata de creme de leite',
    '1 lata de milho verde',
    '1 copo de requeijão cremoso',
    '100 g de azeitona sem caroço',
    '2 peitos de frango desfiados',
    '200 g de mussarela fatiada',
    '100 g de batata palha',
    '1 xícara de água',
    '1 pitada de sal'
  ],
  cuisine: 'Francesa',
  dishType: 'principal',
  image: 'https://www.receitasnestle.com.br/receitas/fricasse-ao-requeijao',
  duration: 30,
  creator: 'Rafael Dias',
  created: '01/12/1984'
})

const updateRecipe = Recipe.updateOne({title: 'Rigatoni alla Genovese'}, {duration: 100});
const deleteRecipe = Recipe.deleteOne({title: 'Carrot Cake'});
const createRecipe = myRecipe.save();

Recipe.insertMany(data)
  .then(recipes => {
    recipes.forEach((recipe) => console.log(`Recipe created: ${recipe.title}`))

    Promise.all([updateRecipe,deleteRecipe,createRecipe])
      .then(values => {
        console.log(values)
        mongoose.connection.close
      })
      .catch(err => {
        console.log(err)
        mongoose.connection.close
      })

  })
  .catch(err => {
    'Error adding revenue to DB',
    err
    mongoose.connection.close
  })
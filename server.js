const mongoose = require('mongoose');
const dotenv = require('dotenv');

dotenv.config({ path: './config.env' });

const app = require('./app');

const DB = process.env.DATABASE.replace(
  '<PASSWORD>',
  process.env.DATABASE_PASSWORD,
);

mongoose
  .connect(DB, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
  })
  .then(() => console.log('DB CONNECTION SUCCESSFUL'));

const tourSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, 'A tour must have a name'],
    unique: true,
  },
  price: {
    type: Number,
    required: [true, 'A tour must have a price'],
  },
  rating: {
    type: Number,
    default: 4.5,
  },
});
 
const Tour = mongoose.model('Tour', tourSchema);

const testTour = new Tour({
  name: 'Japan',
  price: 300
})

testTour.save().then(doc => {
  console.log(doc)
}).catch(err => {
  console.log('ERROR 💥:', err)
})



const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`App running on PORT ${PORT}!`);
});

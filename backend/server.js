const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5500;


// routes
const userRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');
const authRoute = require('./routes/auth');

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

// using project routes
app.use('/api/user', userRoutes);
app.use('/api/posts', postsRoutes);
app.use('/api/auth', authRoute);


// connect to the db
const url = process.env.DATABASE_URL;

mongoose.connect(url)
  .then(() =>
    console.log("Application connected to the database successfully!!")
  )
  .catch((error) => console.log(error));


app.listen(PORT, () =>{
  console.log(`Application is listening on port ${PORT}`);
});
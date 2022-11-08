const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require("multer");
const path = require("path");

const app = express();
require('dotenv').config();

const PORT = process.env.PORT || 5500;


// routes
const userRoutes = require('./routes/users');
const postRoutes = require('./routes/posts');
const authRoute = require('./routes/auth');
const catRoutes = require('./routes/categories');

// middleware
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use("/images", express.static(path.join(__dirname, "/images")));

// using project routes
app.use('/api/users', userRoutes);
app.use('/api/posts', postRoutes);
app.use('/api/auth', authRoute);
app.use('/api/categories', catRoutes);


// connect to the db
const url = process.env.DATABASE_URL;

mongoose.connect(url, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
  .then(() =>
    console.log("Application connected to the database successfully!!")
  )
  .catch((error) => console.log(error));



  const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, "images");
    },
    filename: (req, file, cb) => {
      cb(null, req.body.name);
    },
  });
  
  const upload = multer({ storage: storage });
  app.post("/api/upload", upload.single("file"), (req, res) => {
    res.status(200).json("File has been uploaded");
  });

app.listen(PORT, () =>{
  console.log(`Application is listening on port ${PORT}`);
});
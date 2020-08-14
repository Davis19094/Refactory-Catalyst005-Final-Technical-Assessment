const express = require('express')
const bodyParser = require('body-parser');
// const mongoose = require("mongoose");
const userRoutes = require('./routes/userRoutes');
const Corona = require('./models/userModel');
const path = require("path");

require('dotenv').config();
const mongoose = require('mongoose');


//db
mongoose.connect(process.env.DATABASE, {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

mongoose.connection
  .on('open', () => {
    console.log('Mongoose connection open');
  })
  .on('error', (err) => {
    console.log(`Connection error: ${err.message}`);
  });


const app = express();

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(express.static("public"));
app.set('view engine','pug')
app.set('views', __dirname + '/views');

mongoose.connect(
    "mongodb://localhost:27017/coronavirus",
    { useNewUrlParser: true, useUnifiedTopology: true },
    function(err) {
      if (err) throw err;
      console.log("Successfully connected to database");
    });
  
  
// importing routes

app.use('/',userRoutes)

// listening to the server
app.listen(4000,()=>{
    console.log('listening on 4000')
});
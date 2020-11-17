const express = require("express");
const app = express();
const bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/api/v1', (req, res) => res.json({msg: "Welcome Nerd!"}))


//Database Configuration
const mongoose = require("mongoose");
const url = "mongodb://localhost:27017/kycdirectory-api";

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect( url , {
    keepAlive: true,
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false
  })
  .then(() => {
      console.log("Successfully connected to the database");
  }).catch(err => {
      console.log('Could not connect to the database. Exiting now...');
      console.log(err)
      process.exit();
  });

//Server Configuration
const port = 5000;  
app.listen(port, () => console.log(`App running on port ${port}!`))

module.exports = app;
//Framework
const express = require('express');
const app = module.exports = exports = express();
const mongoose = require('mongoose');

//Define Routes
//Define DB Path
mongoose.connect(process.env.MONGOLAB_URI || 'mongodb://localhost/expedia_app');

var PORT = 5000;

//Use routes
//Define file to pull resources from
app.use( express.static( __dirname + '/build') );
app.listen( PORT , () => {
  console.log('Server is running on port ' + PORT + '.');
} );

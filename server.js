var express = require("express");
var path = require("path");
var bodyParser = require("body-parser");
var cookieParser = require('cookie-parser');
var mongoose = require('mongoose');
var morgan = require('morgan');
var multer = require('multer');
var nodemailer = require('nodemailer');
var mg = require('nodemailer-mailgun-transport');
var passport = require('passport');
var s3 = require('s3');
var mongodb = require("mongodb");
var ObjectID = mongodb.ObjectID;
// var preRender = require('prerender-node')

var router = express.Router();

var app = express();
// app.set('views', __dirname + "/client/partials")
// app.set('view engine', 'html')
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
console.log('here', __dirname)
// app.use(preRender);

app.use(express.static(path.join(__dirname + "/client/")));


// app.use(express.static(path.join(__dirname, '/client'),{index:false,extensions:['html']}));


// app.use(express.static(path.join(__dirname, "./client")));

app.use(bodyParser.json());
app.use(multer({ dest: './uploads/'}).single('file'));



// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

// module.exports = db;
// require('./passport/passport.js')
// require('./server/config/mongoose.js');
// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}




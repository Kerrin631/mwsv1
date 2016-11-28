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
var preRender = require('prerender-node')

// var CLIENTS_COLLECTION = "clients";
// var TEST = "test";

var router = express.Router();

var app = express();
app.set('views', __dirname + "/client/partials")
app.set('view engine', 'html')
app.use(bodyParser.json());
app.use(cookieParser());
app.use(passport.initialize());
console.log('here', __dirname)
app.use(preRender);

app.use(express.static(__dirname + "/client"));
// app.use(express.static(path.join(__dirname, '/client'),{index:false,extensions:['html']}));

// app.use(function(req, res) {
    // res.sendFile(__dirname + '/client/index.html');
// });
// app.use(express.static(path.join(__dirname, "./client")));

// var fs        = require('fs');
// var publicdir = __dirname + '/client/partials';

// app.use(function(req, res, next) {
//   console.log(req)
//   if (req.path.indexOf('.') === -1) {
//     var file = publicdir + req.path + '.html';
//     fs.exists(file, function(exists) {
//       console.log('here')
//       if (exists)
//         req.url += '.html';
//       next();
//     });
//   }
//   else
//     console.log('or here')
//     next();
// });
// app.use(express.static(publicdir));

app.use(bodyParser.json());
app.use(multer({ dest: './uploads/'}).single('file'));

// require('./server/config/mongoose.js');


// Here we find an appropriate database to connect to, defaulting to
// localhost if we don't find one.
// var uristring =
// process.env.MONGOLAB_URI ||
// process.env.MONGOHQ_URL ||
// process.env.MONGODB_URI ||
// 'mongodb://localhost/HelloMongoose';
// Create a database variable outside of the database connection callback to reuse the connection pool in your app.
// var db;

// Connect to the database before starting the application server.
// mongodb.MongoClient.connect(process.env.MONGODB_URI, function (err, database) {
//   if (err) {
//     console.log(err);
//     process.exit(1);
//   }

//   // Save database object from the callback for reuse.
//   console.log("KERRIN", database, "KERRIN")
//   db = database;
//   module.exports = db;
//   var routes_setter = require('./server/config/routes.js');
//   routes_setter(app);
//   console.log("Database connection ready");

  

// });

// mongoose.connect(uristring, function (err, res) {
//   if (err) {
//     console.log ('ERROR connecting to: ' + uristring + '. ' + err);
//   } else {
//     console.log ('Succeeded connected to: ' + uristring);
//     var routes_setter = require('./server/config/routes.js');
//     routes_setter(app);
//     console.log("Database connection ready");
//   }
// });



// Initialize the app.
var server = app.listen(process.env.PORT || 8080, function () {
  var port = server.address().port;
  console.log("App now running on port", port);
});

// module.exports = db;
// require('./passport/passport.js')
require('./server/config/mongoose.js');
// CONTACTS API ROUTES BELOW

// Generic error handler used by all endpoints.
function handleError(res, reason, message, code) {
  console.log("ERROR: " + reason);
  res.status(code || 500).json({"error": message});
}




// Dependencies
// =============================================================
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// Sets up the Express App
// =============================================================
var app = express();
var PORT = process.env.PORT || 3000;
//var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//tables
// =============================================================
var tables = [
  {
    name:"Test Tester",
    phone: "456-7891",
    email: "test@gmail.com",
    id:"bloop -table"
  }


];
var waitlist = [
  {
    name:"Test Tester",
    phone: "456-7891",
    email: "test@gmail.com",
    id:"bloop -waitlist"
  }


];




// Routes
// =============================================================

// Basic route that sends the user first to the AJAX Page
app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "index.html"));
});

app.get("/view", function(req, res) {
  res.sendFile(path.join(__dirname, "view.html"));
  //return array of JSON objects
});

// Search for Specific Character (or all characters) - provides JSON
app.get("/api/tables", function(req, res) {
  //return JSON object of all tables 
  res.send(tables);
});

app.get("/api/waitlist", function(req, res) {
  //return JSON object of waitlist
  res.send(waitlist);
});

// Create New Characters - takes in JSON input
app.("/make", function(req, res) {
  res.sendFile(path.join(__dirname, "make.html"));

});

app.post("/api/tables", function(req, res) {
  //res.sendFile(path.join(__dirname, "make.html"));
  console.log(req);
});

// Starts the server to begin listening
// =============================================================
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});

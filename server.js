//jshint esversion: 6


const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.set('view engine', 'ejs');

app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static('public'));
app.use(express.static('images'));


app.get('/', function(req, res) {
  res.sendFile(__dirname +'/index.html');
  //res.render("header", {header: views/header.ejs});
});

app.get('/reviews', function(req, res) {
  res.sendFile(__dirname +'/reviews.html');
});
app.get('/menu', function(req, res) {
  res.sendFile(__dirname +'/menu.html');
});
/*
app.get('/contact', function(req, res) {
  res.sendFile(__dirname + '/index.html' + #contact);
});
*/

app.listen(3000, function(req, res) {
  console.log("server started on port 3000")
});

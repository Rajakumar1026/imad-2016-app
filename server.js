var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/index.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/about.html', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'about.html'));
});



app.get('/ui/bootstrap.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'bootstrap.css'));
});

app.get('/ui/font-awesome.min.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'font-awesome.min.css'));
});

app.get('/ui/font-awesome-animation.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'font-awesome-animation.css'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/1.jpg', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', '1.jpg'));
});


app.get('/ui/resumeupd_final.pdf', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'resumeupd_final.pdf'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});

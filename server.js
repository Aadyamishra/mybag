var express = require ('express');
var morgan = require ('morgan');
var path = require ('path');
var app = express ();
app.use(morgan('combined'));

var red = [0, 100, 63];
var orange = [40, 100, 60];
var green = [75, 100, 40];
var blue = [196, 77, 55];
var purple = [280, 50, 60];

var myName = "Meenakshi";
var letterColors = [red, orange, green, blue, purple];

function drawName(){
drawName(myName, letterColors);}
function bounceBubbles(){
bounceBubbles();}

if(10 < 3) {
    (bubbleShape = 'square');
}
else {
    (bubbleShape = 'circle');
}


app.get('/', function (req, res) {
  res.sendFile(path.join( 'index.html'));
});
app.get('/', function (req, res) {
  res.sendFile(path.join( 'myCanvas'));
});

app.get('/drawName', function (req, res) {
  res.send(path.join('drawName'));
});
app.get('/bounceBubbles',function (req, res) {
    res.send(path.join('bounceBubbles'));
});


var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`listening on port ${port}!`);
});

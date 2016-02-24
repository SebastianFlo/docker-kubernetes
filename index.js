var express = require('express');
var app = express();
var bodyParser = require('body-parser');
app.use(bodyParser.json());

app.post('/event', function (req, res) {
  console.log('body: ', req.body.hello);
});

app.listen(8080, function () {
  console.log('Example app listening on port 8080!');
});
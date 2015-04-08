require('node-jsx').install({ extension: '.js' });

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));

app.use('/src', function (req, res) {
  res.redirect('http://localhost:3001/src' + req.path);
});

app.use('/', require('./server'));

app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'), function () {
  console.log('The main server is running at http://localhost:' + this.address().port);
});

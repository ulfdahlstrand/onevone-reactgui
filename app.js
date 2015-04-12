require('node-jsx').install({ extension: '.js' });

var path = require('path');
var express = require('express');
var bodyParser = require('body-parser');

var app = express();

var publicPath = path.join(__dirname, 'public');
app.use(express.static(publicPath));


app.use('/', require('./client'));

app.set('port', process.env.PORT || 3000);


app.listen(app.get('port'), function () {
  console.log('The main server is running at http://localhost:' + this.address().port);
});

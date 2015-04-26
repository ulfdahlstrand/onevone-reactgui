var express = require("express");
var bodyParser = require("body-parser");
var path = require('path');

var App = {
	Express: {},
	Server: {},
	init: function() {
		App.Express = express();

		var publicPath = path.join(__dirname, 'public');
		App.Express.use('/public', express.static(publicPath));

		require('./server/api')();

		App.Express.use('/', require('./client'));

		App.Server = App.Express.listen(process.env.PORT || 3000, function() {
		  	console.log('The main server is running at http://localhost:' + App.Server.address().port);
		});
	}
};

module.exports = App;




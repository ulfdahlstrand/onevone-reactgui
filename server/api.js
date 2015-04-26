var App = require("./../core");
var basePath = '/api';
module.exports = function() {
	App.Express.get(basePath + "/test", function (req, res) {
		res.send(process.env.APIBASEURL || 'localhost:3000');
	});
};


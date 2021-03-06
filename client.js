var React = require('react'),
    Router = require('react-router'),
    routes = require('./src/routes'),
    Html = require('./src/Html');

module.exports = function (req, res, next) {
  Router.run(routes, req.url, function (Handler, state) {
    var markup = React.renderToString(<Handler />);
    var html = React.renderToStaticMarkup(<Html markup={markup} title="LoL Versus"/>);
    res.send('<!DOCTYPE html>' + html);
  });
};

/** @jsx React.DOM */


var React = require('react'),
    Router = require('react-router'),
    routes = require('./routes');


Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(React.createElement(Handler, {params: state.params}), document.body);
});

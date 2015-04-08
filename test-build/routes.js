var React = require('react');
var Router = require('react-router');
var Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute;


var Main = require('./components/main'),
    Component = require('./components/component'),
    Component2 = require('./components/component2'),
    NotFound = require('./components/not-found');

var routes = (
    React.createElement(Route, {name: "app", path: "/", handler: Main}, 
      React.createElement(Route, {name: "component", path: "component", handler: Component}), 
      React.createElement(Route, {name: "component2", path: "component2", handler: Component2}), 
      React.createElement(NotFoundRoute, {handler: NotFound})
    )
);

module.exports = routes;

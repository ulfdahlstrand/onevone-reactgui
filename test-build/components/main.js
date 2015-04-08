var React = require('react'),
    Router = require('react-router'),
    Bootstrap = require('react-bootstrap'),
    Navbar = Bootstrap.Navbar,
    Nav = Bootstrap.Nav,
    NavItem = Bootstrap.NavItem,
    RouteHandler = Router.RouteHandler,
    Navigation = Router.Navigation;

var Main = React.createClass({displayName: "Main",
  mixins: [ Navigation ],
  onSelect: function (eventKey) {
    this.transitionTo(eventKey);
  },
  render: function () {
    return React.createElement("div", {className: "container"}, 
      React.createElement("header", null, 
        React.createElement(Navbar, null, 
          React.createElement(Nav, null, 
            React.createElement(NavItem, {eventKey: "component", href: "#", onSelect: this.onSelect}, "Component"), 
            React.createElement(NavItem, {eventKey: "component2", href: "#", onSelect: this.onSelect}, "Component2"), 
            React.createElement(NavItem, {eventKey: "/nowhere", href: "#", onSelect: this.onSelect}, "Nowhere")
          ), 
          React.createElement(Nav, null
          )
        )
      ), 
      React.createElement(RouteHandler, null)
    );
  }
});

module.exports = Main;

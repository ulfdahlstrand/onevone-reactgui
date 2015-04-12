var React = require('react'),
    Router = require('react-router'),
    Bootstrap = require('react-bootstrap'),
    Navbar = Bootstrap.Navbar,
    Nav = Bootstrap.Nav,
    NavItem = Bootstrap.NavItem,
    RouteHandler = Router.RouteHandler,
    Navigation = Router.Navigation;

var Main = React.createClass({
  mixins: [ Navigation ],
  onSelect: function (eventKey) {
    this.transitionTo(eventKey);
  },
  render: function () {
    return <div className="container">
      <header>
        <Navbar>
          <Nav >
            <NavItem eventKey="findSummoner" href="#" onSelect={this.onSelect}>FindSummoner</NavItem>
            <NavItem eventKey="tournamentCreate" href="#" onSelect={this.onSelect}>Create tournament</NavItem>
          </Nav>
          <Nav >
          </Nav>
        </Navbar>
      </header>
      <RouteHandler {...this.props} />
    </div>;
  }
});

module.exports = Main;

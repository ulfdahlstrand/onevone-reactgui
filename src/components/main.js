var React = require('react'),
    Router = require('react-router'),
    Bootstrap = require('react-bootstrap'),
    Navbar = Bootstrap.Navbar,
    Nav = Bootstrap.Nav,
    NavItem = Bootstrap.NavItem,
    RouteHandler = Router.RouteHandler,
    Navigation = Router.Navigation;

var Main = React.createClass({
  mixins: [ Navigation, Router.State ],
  onSelect: function (eventKey) {
    this.transitionTo(eventKey);
  },
  render: function () {
    var menu = null;
    if(this.getPathname() !== "/findSummoner"){ // replace with cleaner solution
      menu = <header className="col-md-12">
        <Navbar>
          <Nav >
            <NavItem eventKey="findSummoner" href="#" onSelect={this.onSelect}>FindSummoner</NavItem>
            <NavItem eventKey="tournamentCreate" href="#" onSelect={this.onSelect}>Create tournament</NavItem>
          </Nav>
          <Nav >
          </Nav>
        </Navbar>
      </header>;
    }
   
    return <div className="container col-md-12">
      {menu}
      <RouteHandler {...this.props} />
    </div>;
  }
});

module.exports = Main;

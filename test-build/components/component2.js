/** @jsx React.DOM */

var React = require('react');
var Component = require('./component');
var $ = require('jquery');

var Component2 = React.createClass({displayName: "Component2",
	getInitialState: function() {
    	return {
      		username: '',
      		userId: ''
    	};
  },
  componentDidMount: function() {

    $.get('https://eune.api.pvp.net/api/lol/eune/v1.4/summoner/by-name/'+userSearch+'?api_key=3fe06ad4-4a6a-4794-9123-d73964ed9a92', function(result) {
      var o = result;
      var keys = Object.keys(o);
      console.log(o);
      if (this.isMounted()) {
        this.setState({
          username:o[keys[0]].name,
          userId: o[keys[0]].id
        });
      }

    }.bind(this));

  },

  render: function () {
    return React.createElement("div", null, React.createElement(Component, null), "test ", this.state.username, " - ", this.state.userId, " ");
  }
});

module.exports = Component2;

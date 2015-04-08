/** @jsx React.DOM */

var React = require('react');

var Component = React.createClass({displayName: "Component",
  render: function () {

    return React.createElement("div", null, "Hello world! it works live too qwerty");
  }
});

module.exports = Component;

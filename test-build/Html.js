var React = require('react');


var Html = React.createClass({displayName: "Html",
  render: function () {
    return (
      React.createElement("html", null, 
        React.createElement("head", null, 
          React.createElement("title", null,  this.props.title), 
          React.createElement("link", {rel: "stylesheet", href: "https://maxcdn.bootstrapcdn.com/bootstrap/3.3.2/css/bootstrap.min.css"})
        ), 
        React.createElement("body", {dangerouslySetInnerHTML: {__html: this.props.markup}}), 
        React.createElement("script", {src: "/src/bundle.js"})
      )
    );
  }
});

module.exports = Html;

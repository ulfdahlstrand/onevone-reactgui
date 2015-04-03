'use strict';
var React = require('react');
var TournamentStore = require('../stores/TournamentStore');
var ReactPropTypes = React.PropTypes;
var FluxibleMixin = require('fluxible').FluxibleMixin;

var MatchListItem = React.createClass({  
    propTypes: {
        message: ReactPropTypes.object
    },
    render: function() {
        var match = this.props.match;
        return (
            <div>{match._id}</div>
        );
    }
});

module.exports = MatchListItem;

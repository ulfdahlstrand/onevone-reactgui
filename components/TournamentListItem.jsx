'use strict';
var React = require('react');
var ReactPropTypes = React.PropTypes;
var FluxibleMixin = require('fluxible').FluxibleMixin;

var Summoner = require('../components/Summoner');

function getSummonerListItem(summonerId) {
    return (
        <Summoner key={summonerId} summonerId={summonerId}/>
    );
}

var MatchListItem = React.createClass({   
    propTypes: {
        message: ReactPropTypes.object
    },
    render: function() {
        var match = this.props.match;
        var summoners = match.summonerIds.map(getSummonerListItem);
        return (
            <ul>{summoners}</ul>
        );
    }
});

module.exports = MatchListItem;

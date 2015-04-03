'use strict';
var React = require('react');
var ReactPropTypes = React.PropTypes;
var FluxibleMixin = require('fluxible').FluxibleMixin;

var SummonerStore = require('../stores/SummonerStore');
var AddSummoner = require('../actions/AddSummoner');

var MatchListItem = React.createClass({  
    mixins: [FluxibleMixin],
    statics: {
        storeListeners: [SummonerStore]
    }, 
    propTypes: {
        message: ReactPropTypes.object
    },
    getInitialState: function () {
        return {
            summonerName : null
        };
    },
    onChange: function () {

        var store = this.getStore(SummonerStore);
        var summoner = store.summoners[this.props.summonerId];
        if(summoner){
            this.setState({summonerName: summoner.name});
        }
        
    },
   componentDidMount: function() {
    var summonerId = this.props.summonerId;
 

    console.log(summonerId);
    	this.executeAction(AddSummoner, {
            id :  summonerId
        });  
    },
    render: function() {
        return (
            <div>{this.state.summonerName}</div>
        );
    }
});

module.exports = MatchListItem;

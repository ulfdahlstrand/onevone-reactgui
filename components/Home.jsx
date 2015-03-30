'use strict';
var SummonerStore = require('../stores/SummonerStore');
var searchSummoner = require('../actions/SearchSummoner');
var React = require('react');
var FluxibleMixin = require('fluxible').FluxibleMixin;

var ENTER_KEY = 13;

var Home = React.createClass({ 
    mixins: [FluxibleMixin],
    statics: {
        storeListeners: [SummonerStore]
        
    },   
    getInitialState: function () {
        return {
            currentSummonerName: null,
            currentSummonerId: null
        };
    },
    onChange: function () {
        var store = this.getStore(SummonerStore);
        this.setState({currentSummonerName: store.currentSummonerName, currentSummonerId: store.currentSummonerId});
    },
    handleNewTodoKeyDown: function (event) {
        if (event.which !== ENTER_KEY) {
            return;
        }
        event.preventDefault();

        var text = this.refs.newField.getDOMNode().value.trim();

        if(text){
            this.executeAction(searchSummoner, {
                name: text
            });
        }
    },
    render: function() {
        return (
        	<div>
            	<input
	                ref="newField"
	                id="summoner-search"
	                placeholder="Type summoner name"
	                onKeyDown={this.handleNewTodoKeyDown}
	                autoFocus={true}
	            /> 
                <p>{this.state.currentSummonerName}</p>
            </div>
        );
    }
});

module.exports = Home;

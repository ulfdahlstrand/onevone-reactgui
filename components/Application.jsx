'use strict';
var React = require('react');
var RouterMixin = require('flux-router-component').RouterMixin;
var FluxibleMixin = require('fluxible').FluxibleMixin;

var Nav = require('./Nav.jsx');
var SearchSummoner = require('./SearchSummoner.jsx');
var About = require('./About.jsx');
var Tournament = require('./Tournament.jsx');
var CreateTournament = require('./CreateTournament.jsx');
var ApplicationStore = require('../stores/ApplicationStore');

var Application = React.createClass({
    mixins: [RouterMixin, FluxibleMixin],
    statics: {
        storeListeners: [ApplicationStore]
    },
    getInitialState: function () {
        return this.getState();
    },
    getState: function () {
        var appStore = this.getStore(ApplicationStore);
        return {
            currentPageName: appStore.getCurrentPageName(),
            pageTitle: appStore.getPageTitle(),
            route: appStore.getCurrentRoute(),
            pages: appStore.getPages()
        };
    },
    onChange: function () {
        this.setState(this.getState());
    },
    render: function () {
        var output = '';

        switch (this.state.currentPageName) {
            case 'home':
                output = <SearchSummoner/>;
                break;
            case 'about':
                output = <About/>;
                break;
            case 'tournament':
                output = <Tournament tournamentId={this.state.route.params.id} />;
                break;
            case 'create-tournament':
                output = <CreateTournament/>;
                break;


        }
        return (
            <div>
                <Nav selected={this.state.currentPageName} links={this.state.pages} />
                {output}
            </div>
        );
    },

    componentDidUpdate: function(prevProps, prevState) {
        var newState = this.state;
        if (newState.pageTitle === prevState.pageTitle) {
            return;
        }
        document.title = newState.pageTitle;
    }
});

module.exports = Application;

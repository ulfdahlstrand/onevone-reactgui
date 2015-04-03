'use strict';

var React = require('react');
var Fluxible = require('fluxible');
var routrPlugin = require('fluxible-plugin-routr');
var fetchrPlugin = require('fluxible-plugin-fetchr');

// create new fluxible instance
var app = new Fluxible({
    component: React.createFactory(require('./components/Application.jsx'))
});

app.plug(fetchrPlugin({
    xhrPath: '/api'
}));

// add routes to the routr plugin
app.plug(routrPlugin({
    routes: require('./configs/routes')
}));

// register stores
app.registerStore(require('./stores/ApplicationStore'));
app.registerStore(require('./stores/SummonerStore'));
app.registerStore(require('./stores/TournamentStore'));


module.exports = app;

var React = require('react');
var Router = require('react-router');
var Route = Router.Route,
    DefaultRoute = Router.DefaultRoute,
    NotFoundRoute = Router.NotFoundRoute;


var Main = require('./components/main'),
    Component = require('./components/component'),
    FindSummoner = require('./components/findSummoner'),
    SummonerTournaments = require('./components/summonerTournaments'),
    Tournament = require('./components/tournament'),
    CreateTournament = require('./components/createTournament'),
    NotFound = require('./components/not-found');

var routes = (
    <Route name="app" path="/" handler={Main}>
      <Route name="summoner" path="summoner/:id" handler={Component} />
      <Route name="summonerTournaments" path="summoner/:id/tournaments" handler={SummonerTournaments} />
      <Route name="findSummoner" path="findSummoner" handler={FindSummoner} />
      <Route name="createTournament" path="tournament/create" handler={CreateTournament} />
      <Route name="tournament" path="tournament/:id" handler={Tournament} />
      
      <NotFoundRoute handler={NotFound} />
    </Route>
);


module.exports = routes;

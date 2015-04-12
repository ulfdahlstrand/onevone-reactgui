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
    TournamentCreate = require('./components/tournamentCreate'),
    TournamentStandings = require('./components/tournamentStandings'),
    NotFound = require('./components/not-found');

var routes = (
    <Route name="app" path="/" handler={Main}>
      <Route name="summoner" path="summoner/:id" handler={Component} />
      <Route name="summonerTournaments" path="summoner/:id/tournaments" handler={SummonerTournaments} />
      <Route name="findSummoner" path="findSummoner" handler={FindSummoner} />
      <Route name="tournamentCreate" path="tournament/create" handler={TournamentCreate} />
      <Route name="tournamentStandings" path="tournament/:id/standings" handler={TournamentStandings} />
      <Route name="tournament" path="tournament/:id" handler={Tournament} />
      
      <NotFoundRoute handler={NotFound} />
    </Route>
);


module.exports = routes;

'use strict';

var loadPage = require('../actions/loadPage');

module.exports = {
    home: {
        path: '/',
        method: 'get',
        page: 'home',
        title: 'Home',
        showInNav: true,
        action: loadPage
    },
    about: {
        path: '/about',
        method: 'get',
        page: 'about',
        title: 'About',
        showInNav: true,
        action: loadPage
    },
    tournamentCreate: {
        path: '/tournament/create',
        method: 'get',
        page: 'create-tournament',
        title: 'Create Tournament',
        showInNav: false,
        action: loadPage
    },
    tournament: {
        path: '/tournament/:id',
        method: 'get',
        page: 'tournament',
        title: 'Tournament',
        showInNav: false,
        action: loadPage
    }
};

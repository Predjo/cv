/*global require*/
'use strict';

require.config({
    shim: {
        bootstrap: {
            deps: ['jquery'],
            exports: 'jquery'
        },
        marionette: {
            deps: ['jquery', 'underscore', 'backbone'],
            exports: 'Marionette'
        },
        marked: {
            exports: 'marked'
        }
    },
    paths: {
        marked: '../bower_components/marked/lib/marked',
        jquery: '../bower_components/jquery/dist/jquery',
        backbone: '../bower_components/backbone/backbone',
        underscore: '../bower_components/underscore/underscore',
        marionette: '../bower_components/marionette/lib/backbone.marionette',
        bootstrap: '../bower_components/sass-bootstrap/dist/js/bootstrap',
        scrollReveal: '../bower_components/scrollreveal/dist/scrollreveal',
        mandrillapi: '../bower_components/mandrill-api/mandrill'
    }
});

require([
    'app',
    'routes/router',

    //plugins
    'marionette',
    'scrollReveal',
    'bootstrap'
], function(app, Router) {
    app.init();
    app.start(Router);
});

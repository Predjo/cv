/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',

    'views/abilitiesItem',

    //plugins
    'marionette'
], function($, _, Backbone, JST, AbilitiesItemView) {
    'use strict';

    var AbilitiesView = Backbone.Marionette.CompositeView.extend({
        template: JST['app/scripts/templates/abilities.ejs'],

        tagName: 'div',

        childView: AbilitiesItemView,

        childViewContainer: '.abilities-item-list',

        id: '',

        className: 'abilities-wrap',

        events: {},

        initialize: function() {},

    });

    return AbilitiesView;
});
/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'views/interestsItem',

    //plugins
    'marionette'
], function($, _, Backbone, JST, InterestsItemView) {
    'use strict';

    var InterestsView = Backbone.Marionette.CompositeView.extend({
        template: JST['app/scripts/templates/interests.ejs'],

        tagName: 'div',

        id: '',

        childView: InterestsItemView,

        childViewContainer: '.interests-item-list',

        className: 'interests-wrap',

        events: {},

        initialize: function() {}
    });

    return InterestsView;
});
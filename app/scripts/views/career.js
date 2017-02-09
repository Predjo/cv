/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',

    'views/careerItem',

    //plugins
    'marionette'
], function($, _, Backbone, JST, CareerItemView) {
    'use strict';

    var CareerView = Backbone.Marionette.CompositeView.extend({
        template: JST['app/scripts/templates/career.ejs'],

        tagName: 'div',

        childView: CareerItemView,

        childViewContainer: '.career-item-list',

        id: '',

        className: 'career-wrap',

        events: {},

        initialize: function() {},

    });

    return CareerView;
});
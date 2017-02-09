/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',

    'views/educationItem',

    //plugins
    'marionette'
], function($, _, Backbone, JST, EducationItemView) {
    'use strict';

    var EducationView = Backbone.Marionette.CompositeView.extend({
        template: JST['app/scripts/templates/education.ejs'],

        tagName: 'div',

        childView: EducationItemView,

        childViewContainer: '.education-item-list',

        id: '',

        className: 'education-wrap',

        events: {},

        initialize: function() {}
    });

    return EducationView;
});
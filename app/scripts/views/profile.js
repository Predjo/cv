/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',

    //plugins
    'marionette'
], function($, _, Backbone, JST) {
    'use strict';

    var ProfileView = Backbone.Marionette.ItemView.extend({
        template: JST['app/scripts/templates/profile.ejs'],

        tagName: 'div',

        id: 'profile-wrap',

        className: '',

        events: {},

        initialize: function() {},

        render: function() {
            this.$el.html(this.template());
            return this;
        }
    });

    return ProfileView;
});
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

        _calculateAge: function(birthday) {
            var ageDifMs = Date.now() - birthday.getTime();
            var ageDate = new Date(ageDifMs);
            return Math.abs(ageDate.getUTCFullYear() - 1970);
        },

        render: function() {
            this.$el.html(this.template({ age: this._calculateAge(new Date(1989, 5, 17)) }));
            return this;
        }
    });

    return ProfileView;
});
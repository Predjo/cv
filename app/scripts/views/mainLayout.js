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

    var MainLayoutView = Backbone.Marionette.LayoutView.extend({
        template: JST['app/scripts/templates/mainLayout.ejs'],

        tagName: 'div',

        id: 'main-layout',

        className: '',

        events: {},

        regions: {
            header: '#header-section',
            profile: '#profile-section',
            career: '#career-section',
            education: '#education-section',
            abilities: '#abilities-section',
            interests: '#interests-section',
            contacts: '#contacts-section',
            navigation: '#navigation-section'
        },

        initialize: function() {},

        render: function() {
            this.$el.html(this.template());
            return this;
        },

        onShow: function() {
            console.log('ello');
        }
    });

    return MainLayoutView;
});
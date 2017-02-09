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

    var InterestsItemView = Backbone.Marionette.ItemView.extend({
        template: JST['app/scripts/templates/interestsItem.ejs'],

        tagName: 'div',

        id: '',

        className: 'interests-item',

        events: {},

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return InterestsItemView;
});
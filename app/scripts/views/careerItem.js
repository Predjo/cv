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

    var CareerItemView = Backbone.Marionette.ItemView.extend({
        template: JST['app/scripts/templates/careerItem.ejs'],

        tagName: 'div',

        id: '',

        className: 'career-item row',

        events: {},

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
        }
    });

    return CareerItemView;
});
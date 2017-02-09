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

    var AbilitiesItemView = Backbone.Marionette.ItemView.extend({
        template: JST['app/scripts/templates/abilitiesItem.ejs'],

        tagName: 'div',

        id: '',

        className: 'abilities-item container',

        events: {
            'mouseenter .skill-name': 'animateProgress'
        },

        initialize: function() {
            this.listenTo(this.model, 'change', this.render);
        },

        render: function() {
            this.$el.html(this.template(this.model.toJSON()));
        },

        animateProgress: function(event) {
            var bar = $(event.target).closest('.skill-name').find('.progress-bar');
            if (bar) {
                var current = bar.attr('aria-valuenow');
                var max = bar.attr('aria-valuemax');
                bar.css('width', '0%');
                setTimeout(function() {
                    bar.addClass('transition');
                    bar.css('width', (current / max * 100) + '%');
                }, 10);

                setTimeout(function() {
                    bar.removeClass('transition');
                }, 500);
            }
        }
    });

    return AbilitiesItemView;
});
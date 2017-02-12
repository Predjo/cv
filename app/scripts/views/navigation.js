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

    var NavigationView = Backbone.Marionette.ItemView.extend({
        template: JST['app/scripts/templates/navigation.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click .navigation-items-wrap li a': 'onClick'
        },

        initialize: function() {
            $(window).on('scroll', this.onScroll);
        },

        render: function() {
            this.$el.html(this.template());
        },

        onClick: function(event) {
            var target = $(event.target).data('navigation');
            if (target) {
                event.preventDefault();
                var targetID = '#header-' + target;
                $('html, body').animate({
                    scrollTop: $(targetID).offset().top - 50
                }, 450);
            }
        },

        onScroll: function() {
            var height = $(window).height() - 60;
            var scrollTop = $(window).scrollTop();
            var navigation = $('#navigation-section');

            if (scrollTop > height) {
                navigation.addClass('light');
            } else {
                navigation.removeClass('light');
            }
        },


    });

    return NavigationView;
});
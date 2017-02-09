/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',

    'collections/header',

    //plugins
    'marionette'
], function($, _, Backbone, JST, HeaderCollection) {
    'use strict';

    var HeaderView = Backbone.Marionette.ItemView.extend({
        template: JST['app/scripts/templates/header.ejs'],

        tagName: 'div',

        id: 'header-wrap',

        className: '',

        events: {},

        initialize: function() {
            $(window).on('resize', this.updateSize.bind(this));
            this.headerCollection = new HeaderCollection();
        },

        render: function() {
            this.$el.html(this.template());
            this.updateSize();
            this.setHeaderImg();
            return this;
        },

        updateSize: function() {
            this.$('.header-overlay').css({
                height: ($(window).height()) + 'px'
            });

            $('#main-content-wrap').css({
                top: ($(window).height()) + 'px'
            });

            this.trigger('header:resize', '');
        },

        setHeaderImg: function() {
            this.headerCollection.fetch({
                success: function() {
                    var num = Math.abs(Math.round(this.headerCollection.length * Math.random()) - 1);
                    var header = this.headerCollection.at(num);
                    var image = header.get('image');
                    this.$('.header-overlay').css('background-image', 'url(\'../images/headers/' + image + '\')');
                    this.$('.header-overlay').addClass('visible');
                }.bind(this)
            });



        }


    });

    return HeaderView;
});
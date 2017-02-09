/*global define*/

define(['jquery', 'underscore', 'backbone', 'scrollReveal'], function($, _, Backbone, ScrollReveal) {
  'use strict';

  var app = {

    init: function() {
      window.scrollReveal = new ScrollReveal();
    },

    start: function(Router) {
      this.router = new Router();
      Backbone.on('navigate', this.navigate, this);
      Backbone.history.start({
        pushState: false,
        root: ''
      });
    },

    navigate: function(route) {
      this.router.navigate(route, true);
    },

    switchView: function(view, render) {
      render = render !== undefined ? render : true;
      if (view !== this.currentView) {
        if (this.currentView && this.currentView.cleanup) {
          this.currentView.cleanup();
        }

        this.currentView = view;
        $('#main-container').html(view.el);
        if (render) {
          view.render();
          if (view.onDomAttach) {
            view.onDomAttach();
          }
        }
      }
    }

  };

  return app;
});
/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',

    'views/mandrillForm',
    //plugins
    'marionette'
  ],
  function($, _, Backbone, JST, MandrillFormView) {
    'use strict';

    var ContactsView = Backbone.Marionette.ItemView.extend({
      template: JST['app/scripts/templates/contacts.ejs'],

      tagName: 'div',

      id: 'contacts-wrap',

      className: '',

      events: {
        'click .mandrill-show-btn': 'showMandrillForm'
      },

      initialize: function() {
        this.mandrillForm = new MandrillFormView();
        this.listenTo(this.mandrillForm, 'mandrill:hide', this.hideMandrillForm, this);
      },

      render: function() {
        this.$el.html(this.template());
        this.$('.mandrill-form-wrap').html(this.mandrillForm.render().el);
        return this;
      },

      showMandrillForm: function() {
        this.$('.contact-links-wrap').hide('fast');
        this.$('.mandrill-form-wrap').show('fast');
        this.$('.mandrill-text').hide('fast');
      },

      hideMandrillForm: function() {
        this.$('.contact-links-wrap').show('fast');
        this.$('.mandrill-form-wrap').hide('fast');
        this.$('.mandrill-text').show('fast');
      }

    });

    return ContactsView;
  });
/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',

    //plugins
    'marionette',
    'mandrillapi'
], function($, _, Backbone, JST) {
    'use strict';

    var MandrillFormView = Backbone.View.extend({
        template: JST['app/scripts/templates/mandrillForm.ejs'],

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click .mandrill-submit-btn': 'submitForm',
            'click .mandrill-cancel-btn': 'hideForm'
        },

        initialize: function() {},

        render: function() {
            this.$el.html(this.template());
            return this;
        },

        submitForm: function(e) {
            e.preventDefault();
            this.showLoader();

            var m = new mandrill.Mandrill('kX_zZK9kRNSJ72oXESmBig');
            var params = {
                'message': {
                    'from_email': 'mycv.contact@gmail.com',
                    'to': [{
                        'email': 'predovan.nikola@gmail.com',
                        //'name': 'RECIPIENT NAME(OPTIONAL)',
                        'type': 'to'
                    }],
                    'autotext': 'true',
                    'subject': 'Digital Resume Contact from ' + this.$('#madrill-form-name').val(),
                    'html': '<b>Name</b>: ' + this.$('#madrill-form-name').val() + '<br>' +
                        '<b>Email</b>: ' + this.$('#madrill-form-email').val() + '<br>' +
                        '<b>Message</b>: ' + this.$('textarea#madrill-form-text').val()
                }
            };

            m.messages.send(params, function(res) {

                this.$('.mandrill-message').html('Message vas send successfully!');
                this.hideLoader();

                setTimeout(function() {
                    this.hideForm();
                }.bind(this), 2000);

            }.bind(this), function(err) {

                this.$('.mandrill-message').html('There was an error while sending a message, please try again!');
                this.hideLoader();
                console.log(err);

            }.bind(this));
        },

        hideForm: function(e) {
            if (e) {
                e.preventDefault();
            }

            this.clearForm();
            this.trigger('mandrill:hide');
        },

        clearForm: function() {
            this.$('.mandrill-message').html('');
            this.$('#madrill-form-name').val('');
            this.$('#madrill-form-email').val('');
            this.$('textarea#madrill-form-text').val('');
        },

        showLoader: function() {
            this.$('.mandrill-loader').show();
        },

        hideLoader: function() {
            this.$('.mandrill-loader').hide();
        }
    });

    return MandrillFormView;
});
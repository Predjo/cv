/*global define*/

define([
    'underscore',
    'backbone'
], function(_, Backbone) {
    'use strict';

    var AbilityModel = Backbone.Model.extend({
        url: '',

        initialize: function() {},

        defaults: {},

        validate: function(attrs, options) {},

        parse: function(response, options) {
            return response;
        }
    });

    return AbilityModel;
});
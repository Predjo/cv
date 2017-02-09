/*global define*/

define([
	'underscore',
	'backbone',
	'models/ability'
], function(_, Backbone, AbilityModel) {
	'use strict';

	var AbilityCollection = Backbone.Collection.extend({
		model: AbilityModel,
		url: 'data/abilities.json'
	});

	return AbilityCollection;
});
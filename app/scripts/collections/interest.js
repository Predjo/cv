/*global define*/

define([
	'underscore',
	'backbone',
	'models/interest'
], function(_, Backbone, InterestModel) {
	'use strict';

	var InterestCollection = Backbone.Collection.extend({
		model: InterestModel,
		url: 'data/interests.json'
	});

	return InterestCollection;
});
/*global define*/

define([
	'underscore',
	'backbone',
	'models/career'
], function(_, Backbone, CareerModel) {
	'use strict';

	var CareerCollection = Backbone.Collection.extend({
		model: CareerModel,
		url: 'data/career.json'
	});

	return CareerCollection;
});
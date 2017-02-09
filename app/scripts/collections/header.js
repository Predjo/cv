/*global define*/

define([
	'underscore',
	'backbone',
	'models/header'
], function(_, Backbone, HeaderModel) {
	'use strict';

	var HeaderCollection = Backbone.Collection.extend({
		model: HeaderModel,
		url: 'data/headers.json'
	});

	return HeaderCollection;
});
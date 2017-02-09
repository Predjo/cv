/*global define*/

define([
	'underscore',
	'backbone',
	'models/education'
], function(_, Backbone, EducationModel) {
	'use strict';

	var EducationCollection = Backbone.Collection.extend({
		model: EducationModel,
		url: 'data/education.json'
	});

	return EducationCollection;
});
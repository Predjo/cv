/*global define*/

define([
	'jquery',
	'backbone',
	'app',
	'views/home'
], function($, Backbone, app, HomeView) {
	'use strict';

	var RouterRouter = Backbone.Router.extend({
		routes: {
			'': 'home'
		},

		home: function() {
			app.switchView(new HomeView());
		},

	});

	return RouterRouter;
});
/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'templates',
    'scrollReveal',

    'views/mainLayout',

    'views/header',
    'views/profile',
    'views/education',
    'views/career',
    'views/abilities',
    'views/interests',
    'views/contacts',
    'views/navigation',

    'collections/career',
    'collections/education',
    'collections/ability',
    'collections/interest'
], function($, _, Backbone, JST, ScrollReveal,

    MainLayout,

    HeaderView,
    ProfileView,
    EducationView,
    CareerView,
    AbilitiesView,
    InterestsView,
    ContactsView,
    NavigationView,

    CareerCollection,
    EducationCollection,
    AbilitiesCollection,
    InterestsCollection
) {
    'use strict';

    var HomeView = Backbone.Marionette.ItemView.extend({
        template: JST['app/scripts/templates/home.ejs'],

        tagName: 'div',

        id: 'main-view',

        className: '',

        events: {},

        initialize: function() {
            var carrerCol = new CareerCollection();
            var educationCol = new EducationCollection();
            var abilitiesCol = new AbilitiesCollection();
            var interestsCol = new InterestsCollection();

            carrerCol.fetch();
            educationCol.fetch();
            abilitiesCol.fetch();
            interestsCol.fetch();

            this.navigationView = new NavigationView();

            this.headerView = new HeaderView();
            this.listenTo(this.headerView, 'header:resize', this.refreshScrollSpy, this);

            this.profileView = new ProfileView();

            this.educationView = new EducationView({
                collection: educationCol
            });

            this.careerView = new CareerView({
                collection: carrerCol
            });

            this.abilitiesView = new AbilitiesView({
                collection: abilitiesCol
            });

            this.interestsView = new InterestsView({
                collection: interestsCol
            });

            this.contactsView = new ContactsView();
        },

        render: function() {
            this.layout = new MainLayout();
            this.$el.html(this.layout.render().el);

            this.layout.header.show(this.headerView);
            this.layout.profile.show(this.profileView);
            this.layout.education.show(this.educationView);
            this.layout.career.show(this.careerView);
            this.layout.abilities.show(this.abilitiesView);
            this.layout.interests.show(this.interestsView);
            this.layout.contacts.show(this.contactsView);
            this.layout.navigation.show(this.navigationView);
            this.initAnim();
        },

        initAnim: function() {
            setTimeout(function() {
                var config = {
                    //reset: true
                };

                $('body').scrollspy({
                    target: '#navbar-wrap',
                    offset: 80
                });

                if (window.innerWidth > 500) {
                    window.scrollReveal = new ScrollReveal(config);
                }

            }, 300);
        },

        refreshScrollSpy: function() {
            $('[data-spy="scroll"]').each(function() {
                var data = $(this).scrollspy('refresh');
            });
        }
    });

    return HomeView;
});
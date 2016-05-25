Template.categories.helpers({
	getCategories: function () {
		Meteor.subscribe('Categories');
		return Categories.find().fetch();
	}
});

Template.header.events({
	'click h1': function () {
		Router.go('/');
	}
});
Template.category.helpers({
	getGames: function () {
		Meteor.subscribe('Games');
		return Games.find({category: this._id}).fetch();
	}
});

Template.allt.helpers({
	getGames: function () {
		Meteor.subscribe('Games');
		return Games.find().fetch();
	}
});
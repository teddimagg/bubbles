Template.admin.events({
	'submit .insCat': function(event){
		event.preventDefault();
		var name = event.target.name.value;

		Meteor.call('insertCategory', name);
	},
	'submit .insGame': function(event){
		event.preventDefault();
		Meteor.subscribe('Games');
		var name = event.target.name.value;
		var link = event.target.link.value;
		var thumb = event.target.thumb.value;
		
		var sel = event.target.category;
		var category = sel.options[sel.selectedIndex].getAttribute('data-id');

		Meteor.call('insertGame', name, link, category, thumb);
		console.log(Games.find().fetch());
	},
	'click .catrem': function(){
		Meteor.call('removeCategory', this._id);
	},
	'click .gamerem': function(){
		Meteor.call('removeGame', this._id);
	}
});

Template.admin.helpers({
	cats: function(){
		Meteor.subscribe('Categories');
		return Categories.find().fetch();
	},
	games: function(){
		Meteor.subscribe('Games');
		return Games.find().fetch();	
	}
});
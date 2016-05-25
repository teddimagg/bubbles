Meteor.publish('Categories', function () {
	return Categories.find();
});

Meteor.publish('Games', function() {
	return Games.find();
});

Meteor.methods({
	'insertCategory': function(name){
		Categories.insert({name: name});
	},
	'insertGame': function(name, link, category, thumb){
		Games.insert({
			name: name,
			link: link,
			category: category,
			thumb: thumb,
			played: 0,
			dateCreated: new Date()
		});
	},
	'removeCategory': function(id){
		Categories.remove(id);
	},
	'removeGame': function(id){
		Games.remove(id);
	},
	'playGame': function(id){
		Games.update({_id: id}, {$inc: {played: 1}});
	}
});
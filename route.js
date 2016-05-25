Router.configure({
	layoutTemplate:'shared'
});

Router.route('/', function () {
    this.render('home');
});

Router.route('/admin', function () {
	this.render('admin');
});

Router.route('/register', function() {
	this.render('register');
});

Router.route('/allt', function() {
	this.render('allt');
});

Router.route('/spila/:_id', {
	template: 'game',
	data: function(){
		var current = this.params._id;
		Meteor.subscribe('Games');
		return Games.findOne({ _id: current});
	}
});

Router.route('/gerd/:_id', {
	template: 'category',
	data: function(){
		var current = this.params._id;
		Meteor.subscribe('Categories');
		return Categories.findOne({ _id: current});
	}
});


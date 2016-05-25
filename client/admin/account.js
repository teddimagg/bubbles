Template.register.events({
    'submit .accreg': function (event) {
 
        event.preventDefault();
 
 
        var email = event.target.email.value;
        var password = event.target.password.value;
        var firstname = event.target.name.value;
 
        var user = {'email':email,password:password,profile:{name:firstname}};
 
        Accounts.createUser(user,function(err){
            if(!err) {
                Router.go('/');
                $('#profiledrop').css("right","-300px");
                Session.set('login', false);
            }
        });
    }
});

Template.login.events({
    'submit .acclogin': function (event) {
        event.preventDefault();
        var email = event.target.email.value;
        var password = event.target.password.value;
        
        Meteor.loginWithPassword(email,password,function(err){
            if(!err){
                Session.set('login', false);
            }
        }); 
    }
});
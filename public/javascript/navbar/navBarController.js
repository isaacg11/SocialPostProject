(function() {
	'use strict';
	angular.module('app')
	.controller('navbarController', navbarController);

	navbarController.$inject = ['userFactory', '$state'];

	function navbarController(userFactory, $state) {
		var nav = this; 
		nav.user = {}; //this line is declaring a variable 'nav.user' equal to an empty obj.
		nav.register = register; //this line is declaring a variable 'nav.register' equal to 'register'.
//------------------------------------------------------------------------------------------------------------------------------------------------------------------//

function register(){
	var user = nav.user; //this line is declaring a variable 'your' equal to 'register'.
	if(!user.username || !user.email || !user.password || !user.cpassword || !(user.password === user.cpassword )) { //this line is saying if none of the expressions are
		return false; //true, then to return false to THE CLIENT.
	}
	userFactory.register(user).then(function(){ //this line says to go to the HF and activate the function 'register' by passing the data obj.'user' in the parameter.
		$state.go('Home');//this line says that once the function is complete, go back and render the 'Home' state.
	});

}


}
})();
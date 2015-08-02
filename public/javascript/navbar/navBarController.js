(function() {
	'use strict';
	angular.module('app')
	.controller('navBarController', navBarController);

	navBarController.$inject = ['userFactory', '$state'];

	function navBarController(userFactory, $state) {
		var vm = this; 
		vm.user = {}; //this line is declaring a variable 'nav.user' equal to an empty obj.
		vm.status = userFactory.status; //this line is declaring a variable 'vm.status' equal to 'userFactory.status'
		vm.register = register; //this line is declaring a variable 'nav.register' equal to 'register'.
		vm.login = login; //this line is declaring a variable 'vm.login' equal to 'login'.
		vm.logout = userFactory.logout; //this line is declaring a variable 'vm.logout' equal to 'userFactory.logout'.
//------------------------------------------------------------------------------------------------------------------------------------------------------------------//

function register() {
	console.log("reached the register func. in navbarController");
	var u = vm.user; //this line is declaring a variable 'user' equal to 'register'.
	if(!u.username || !u.email || !u.password || !u.cpassword || !(u.password === u.cpassword )) { //this line is saying if none of the expressions are
		return false; //true, then to return false to THE CLIENT.
	}
	userFactory.register(u).then(function(){ //this line says to go to the HF and activate the function 'register' by passing the data obj.'user' in the parameter.
		$state.go('Home');//this line says that once the function is complete, go back and render the 'Home' state.
	});
}
function login () {
	userFactory.login(vm.user).then(function(){
		$state.go('Home');
	});
}

}
})();
(function() {
	'use strict';
	angular.module('app', ['ui.router'])
	.config(Config);
	Config.$inject = ['$stateProvider', '$urlRouterProvider'];
	function Config($stateProvider, $urlRouterProvider) {
		$stateProvider.state('Home',{
			url: '/',
			templateUrl: 'views/home.html'
		}).
		state('createComment',{ //this line says when the ui-sref 'createComment' is activated, go to the url below.
			url:'/Comment/add', //this line says it's using the model of 'Comment.js' and the url page tag of 'add'.
			templateUrl:'javascript/createComment/createComment.html' //this line says to go to the javascript folder, go to the createComment folder, and then render the createComment.html template.
		}).
		state('Register',{ //this line says when the ui-sref 'Register' is activated, go to the url below.
			url:'/Register', //this line says it's using the url page tag of 'Register'
			templateUrl:'/javascript/Users/register.html' //this line says to go to the javascript folder, go to the Users folder, and then render the register.html template.
		}).
		state('Login',{ //this line says when the ui-sref 'Login' is activated, go to the url below.
			url:'/Login', //this line says it's using the url page tag of '/Login'
			templateUrl: '/javascript/Users/login.html' //this line says to go to the javascript folder, go to the Users folder, and then render the login.html template.
		});
		$urlRouterProvider.otherwise('/'); //if no route is specified, go to this route.
	}
})();

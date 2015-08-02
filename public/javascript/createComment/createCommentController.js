(function() {
	'use strict';
	angular.module('app')
	.controller('createCommentController', createCommentController);

	createCommentController.$inject = ['HomeFactory','$state'];

	function createCommentController(HomeFactory,$state) {
		var vm = this; //this line says that 'vm' will be the databinding bridge between the createComment.html and this controller.
		var comment = {}; //this line says that 'comment' will be an empty object.
//------------------------------------------------------------------------------------------------------------------------------------------------------------------//

		vm.createComment = function() { //this line is a function that takes input from the createComment.html page through 'vm' databinding.
			HomeFactory.postComment(vm.comment).then(function(){ //this line says to activate 'postComment()'' func. in the HF and pass the data in the 'comment' obj.
				$state.go('Home'); // line says that once the 'postComment()' is done to go to the 'Home' state in app.js.
			});
		};
	}
})();
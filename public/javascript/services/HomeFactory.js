(function() {
	'use strict';
	angular.module('app')
	.factory('HomeFactory', HomeFactory);

	HomeFactory.$inject = ['$http', '$q'];

	function HomeFactory($http, $q) {
		var o = {}; // this is an empty object that will take all the functions and put them in the obj. "o" 
		o.comments = []; //this is an empty array
//------------------------------------------------------------------------------------------------------------------------------------------------------------------//

		o.postComment = function(comment){ //this line is a function that uses the data passed from the createCommentController and puts it in the parameter.
			var q = $q.defer(); //this line creates a variable called 'q' which holds $q.defer().
			$http.post('/the/apiCall/Comment', comment).success(function(res){ //this line says if the post request is successful TO THE SERVER to run the func., but not error().
				comment._id = res.id; //this line will give the comment data an id as a response to the CLIENT SIDE.
				comment.dateCreated = new Date(); //this line takes the data, assigns it a property of dateCreated, and uses the new Date() method to insert the current date. (CLIENT SIDE)
				o.comments.push(comment); //this line pushes the data from 'comment' and puts in the empty array 'comments' that can be used on the CLIENT SIDE.
				q.resolve(); // this line says to go back to the cCController and activate the first property '.then'.
			}).error(function(res){ //this line says that if there is an error to run the function.
				q.reject(res); //this line says to run the 2nd property in the cCController (usually an error notification)
			});
			return q.promise; //this line turns the function call in the cCController into an object and to activate when the q.whatever method is used.
		};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------//

o.getComment = function(){ 
	var q = $q.defer();
			$http.get('/the/apiCall/Comment').success(function(res){ //this line sends a get request to '/the/apiCall/Comment'. 
				q.resolve(res);
			});
			return q.promise; //this line turns the function call in the cCController into an object and to activate when the q.whatever method is used.
		};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------//

o.deleteComment = function(comment){ 
			$http.post('/the/apiCall/deleteComment/' + comment._id).success(function(res){ //this line sends a post request to '/the/apiCall/deleteComment/'+commentID to SERVER SIDE.
				o.comments.splice(o.comments.indexOf(comment), 1);//this line takes the comments array obj. and splices the array obj. at the index of 'comment', 1 (CLIENT SIDE)
			}); 
		};
//------------------------------------------------------------------------------------------------------------------------------------------------------------------//

		o.getComment(); //this line invokes the 'getComment()' function.
		return o; //this line says to take all the functions in the obj 'o' and then inject them into the HF for use in the controllers.
	}
})();
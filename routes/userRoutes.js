var express = require('express'); //this line imports Express.
var mongoose = require('mongoose'); //this line imports Mongoose
var passport = require('passport'); //this line imports Passport
var jwt = require('express-jwt'); //this line imports the Express-jwt
var User = mongoose.model('User'); 
var router = express.Router();

router.post("/Register", function(req, res, next){ //this line activates the function when a user sends a post request to '/Register'.
	var user = new User(); //this line declares a variable 'user' equal to the object constructor 'new User()'; NOTE ---> 'User' is connected to the mongoose model.
	user.username = req.body.username; //this line declares a variable 'user.username' and makes it equal to the request body's username property (MONGODB)
	user.email = req.body.email; //this line declares a variable 'user.email' and makes it equal to the request body's email property. (MONGODB)
	user.setPassword(req.body.password); //this line says to set the password in mongodb equal to the request body's password property. (MONGODB)
	user.save(function(err,user){ //this line says to save the 'user' object to MONGODB.
		if(err) return next (err);
		res.json({token :user.gererateJWT()}); //this line says to parsify the response with json and send the new JWT to THE CLIENT.
	});

});



module.exports = router;

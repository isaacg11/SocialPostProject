var express = require('express'); //this line imports Express.
var mongoose = require('mongoose'); //this line imports Mongoose
var passport = require('passport'); //this line imports Passport
var jwt = require('express-jwt'); //this line imports the Express-jwt
var User = mongoose.model('User'); 
var router = express.Router();

router.post("/Register", function(req, res, next){ //this line activates the function when a user sends a post request to '/Register'.
	var user = new User(); //this line declares a variable 'user' equal to the object constructor 'new User()'.
	user.username = req.body.username; //this line declares a variable 'user.email' and makes it equal to 
	user.email = req.body.email;
	user.setPassword(req.body.password);
	user.save(function(err,user){
		if(err) return next (err);
		res.json({token :user.gererateJWT()});
	});

});



module.exports = router;

var mongoose = require('mongoose'); //this line imports 'mongoose'.

var CommentSchema = new mongoose.Schema({ //this function says that when data is sent to mongodb to format the data according to the Schema.
	description: {
		type: String,
		required:true
	},
	dateDeleted: {
		type: Date,
		default: null
	},
	dateCreated: Date,
	comments:[{
		body:String,
		user: {type: mongoose.Schema.Types.ObjectId, ref:'User'},
		dateCreated: Date
	}]
});

mongoose.model('Comment', CommentSchema); //this line says that the model will be referenced by the name of 'Comment', and to use CommentSchema for the data.

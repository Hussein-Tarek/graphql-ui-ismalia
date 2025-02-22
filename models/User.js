const mongoose = require('mongoose');


const { Schema } = mongoose;

const userSchema = new Schema({
  name: {
		type: String,
		required: true,
	},
	email:{
		type:String,
		required:true,
		unique:true
	},
	password:{
		type: String,
		required: true,
	}

},
{
	toJSON: { virtuals: true },
	toObject: { virtuals: true }
});

userSchema.virtual('posts', {
	ref: 'Post',
	foreignField: 'userId',
	localField: '_id'
});
userSchema.virtual("comments", {
	ref: "Comment",
	foreignField: "userId",
	localField: "_id",
	});

const User = mongoose.model('User',userSchema);
module.exports = User;



// ,
// {
// 		toJSON: { virtuals: true },
// 		toObject: { virtuals: true }
// }
// userSchema.virtual('posts', {
// 	ref: 'Post',
// 	foreignField: 'userId',
// 	localField: '_id'
// });
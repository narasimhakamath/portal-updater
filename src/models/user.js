const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	mailAddress: {
		type: String,
		required: true,
		trim: true
	},
	password: {
		type: String,
		required: true
	},
	profilePicture: {
		type: Buffer
	},
	isApproved: {
		type: Boolean,
		default: false
	},
	isSuperUser: {
		type: Boolean,
		default: false
	},
	isActive: {
		type: Boolean,
		default: true
	}
}, {
	timestamps: true
});

const User = mongoose.model('User', userSchema);
module.exports = User;
const mongoose = require('mongoose');

const userapprovalSchema = new mongoose.Schema({
	forUserID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	byUserID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	action: {
		type: String,
		enum: ['Approved', 'Rejected'],
		default: 'Approved'
	},
	isActive: {
		type: Boolean,
		default: true
	}
}, {
	timestamps: true
});

const UserApproval = mongoose.model('UserApproval', userapprovalSchema);
module.exports = UserApproval;
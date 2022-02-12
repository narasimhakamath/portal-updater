const mongoose = require('mongoose');

const companyuserSchema = new mongoose.Schema({
	companyID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'Company'
	},
	userID: {
		type: mongoose.Schema.Types.ObjectId,
		required: true,
		ref: 'User'
	},
	isUpdateAccess: {
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

const CompanyUserSchema = mongoose.model('CompanyUserSchema', companyuserSchema);
module.exports = CompanyUserSchema;
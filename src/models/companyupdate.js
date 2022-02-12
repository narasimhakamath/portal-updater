const mongoose = require('mongoose');

const companyupdateSchema = new mongoose.Schema({
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
	commitID: {
		type: String,
		required: true,
		trim: true
	},
	branchName: {
		type: String,
		required: true,
		trim: true
	},
	isSuccess: {
		type: Boolean,
		default: false
	}
}, {
	timestamps: true
});

const CompanyUpdate = mongoose.model('CompanyUpdate', companyupdateSchema);
module.exports = CompanyUpdate;
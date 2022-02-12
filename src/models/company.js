const mongoose = require('mongoose');

const companySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
		trim: true
	},
	phoneNumber: {
		type: String,
		required: true,
		trim: true
	},
	mailAddress: {
		type: String,
		required: true,
		trim: true
	},
	domainName: {
		type: String,
		required: true,
		trim: true
	},
	databaseName: {
		type: String,
		required: true,
		trim: true
	},
	lastRunRevisionID: {
		type: Number,
		default: 0
	},
	isActive: {
		type: Boolean,
		default: true
	}
}, {
	timestamps: true
});

const Company = mongoose.model('Company', companySchema);
module.exports = Company;
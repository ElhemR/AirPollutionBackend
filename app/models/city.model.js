
const mongoose = require('mongoose');
const Country=require('./country.model.js');
const Schema = mongoose.Schema;


const City = new Schema({
	cityname: String,
	qaindex: Number,
	country: [{ type: Schema.Types.ObjectId, ref: 'Country' }],
	rank:Number
}, {
	toJSON: {
		virtuals: true,
	},

}, { versionKey: false }
 );

module.exports = mongoose.model('City', City);

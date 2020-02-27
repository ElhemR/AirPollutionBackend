
const mongoose = require('mongoose');
const Country=require('./country.model.js');
const Schema = mongoose.Schema;


const City = new Schema({
	cityname: String,
	qaindex: String,
	country: [{ type: Schema.Types.ObjectId, ref: 'Country' }],
}, {
	toJSON: {
		virtuals: true,
	},
}
 );

module.exports = mongoose.model('City', City);

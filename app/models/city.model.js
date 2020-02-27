
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const City = new Schema({
	cityname: String,
	qaindex: String,
	country: [{ type: Schema.Types.ObjectId, ref: 'Contry' }],
}, {
	toJSON: {
		virtuals: true,
	},
},
  {
  	collection: 'cities'
  });

module.exports = mongoose.model('City', City);

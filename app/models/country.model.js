const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const Country = new Schema({
    countryname: String,
    population: Number,
    isocode: String,
}, {
        toJSON: {
            virtuals: true,
        },
    },
    {
        collection: 'countries'
    },
    { versionKey: false });

module.exports = mongoose.model('Country', Country);


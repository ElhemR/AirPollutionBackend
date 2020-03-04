const Country = require('../models/country.model.js');


// Retrieve and return all cities from the database.
exports.findAll = (req, res) => {

    var c = Country.find().then(companies => {
       
        res.send(companies);
    });

};
exports.create = (req, res) => {
    Country.find({ countryname : req.body.countryname }, function (err, data) {
        if (err) {
            console.log(err);
            return
        }
        //insert if country doesnt exist in the db
        if (!data.length) {

            const country = new Country({
                countryname: req.body.countryname,
                population: req.body.population,
                isocode: req.body.isocode
            });
            country.save()
                .then(data => {
                    res.send(data);
                }).catch(err => {
                    res.status(500).send({
                        message: err.message || "Error"
                    });
                });
        }
        else {
                          console.log("Country already exists");
               }

    })

    

};





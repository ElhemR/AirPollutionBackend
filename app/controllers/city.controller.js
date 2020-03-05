const City = require('../models/city.model.js');


// Retrieve and return all cities from the database.
exports.findAll = (req, res) => {

     City.find().sort({ "qaindex": -1 }).populate('country', null).then(cities => {
        
        var i = 1;
        cities.forEach(city => {
      
            //var rank = cities.length - i;
    
            city['rank'] = i;
         
            i++;
        });
        res.send(cities);
    });

};


// Add city to the database 
exports.addCity = (req, res) => {



    var country = new Object();
    const city = new City({
        cityname: req.body.cityname,
        qaindex: req.body.qaindex,
        country: country.id
    });

    console.log(city);
    city.save()
        .then(data => {
            res.send(data);
        }).catch(err => {
            console.log(err.message);
            res.status(500).send({
              
                message: err.message || "Error."
            });
        });
};

exports.findOne = (req, res) => {
    City.findById(req.params.cityId)
        .then(city => {
            if (!city) {
                return res.status(404).send({
                    message: "City not found with id " + req.params.cityId
                });
            }
            res.send(city);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "City not found with id " + req.params.cityId
                });
            }
            return res.status(500).send({
                message: "Error retrieving city with id " + req.params.cityId
            });
        });
};

// Update quality air index of a city identified by the cityID in the request
exports.update = (req, res) => {
    // Validate Request
    if (!req.body.qaindex) {
        return res.status(400).send({
            message: "Parameter not found in the request"
        });
    }

    // Find city and update it with the request body
    City.findByIdAndUpdate(req.params.cityId, {
        qaindex: req.body.qaindex 
        
    }, { new: true })
        .then(city => {
            if (!city) {
                return res.status(404).send({
                    message: "City not found with id " + req.params.cityId
                });
            }
        
            res.send(city);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "City not found with id " + req.params.cityId
                });
            }
            return res.status(500).send({
                message: "Error updating city with id " + req.params.cityId
            });
        });
};

exports.delete = (req, res) => {
    City.findByIdAndRemove(req.params.cityId)
        .then(city => {
            if (!city) {
                return res.status(404).send({
                    message: "City not found with id " + req.params.cityId
                });
            }
            res.send(city);
        }).catch(err => {
            if (err.kind === 'ObjectId') {
                return res.status(404).send({
                    message: "City not found with id " + req.params.cityId
                });
            }
            return res.status(500).send({
                message: "Error deleting city with id " + req.params.cityId
            });
        });
};
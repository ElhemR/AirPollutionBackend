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
exports.addCountry = (req, res) => {



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
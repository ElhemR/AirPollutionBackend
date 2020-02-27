module.exports = (app) => {
    const cities = require('../controllers/city.controller.js');

    // Retrieve all cities
    app.get('/cities', cities.findAll);


}
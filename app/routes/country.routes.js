module.exports = (app) => {
    const countries = require('../controllers/country.controller.js');

    // Retrieve all countries
    app.get('/countries', countries.findAll);
    app.post('/country/add',countries.create)
  

}
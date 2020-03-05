module.exports = (app) => {
    const cities = require('../controllers/city.controller.js');

    // Retrieve all cities
    app.get('/cities', cities.findAll);
   
    app.post('/city/add', cities.addCity);
   
    app.get('/city/:cityId', cities.findOne);

   
    app.put('/city/:cityId', cities.update);

    
   app.delete('/city/:cityId', cities.delete);
}
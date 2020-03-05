const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const jwt = require('jsonwebtoken');
var expressJWT = require('express-jwt');
// create express app
const app = express();

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({
    extended: true
})); 
app.use(cors());
app.options('*', cors());
// parse requests of content-type - application/json
app.use(bodyParser.json());


let secret = 'XPZZfN0NOml3z9FMfmpgX';

/* CREATE TOKEN FOR USE */
app.get('/token/sign', (req, res) => {
    var userData = {
        "name": "admin",
        "id": "5614"
    }
    let token = jwt.sign(userData, secret, { expiresIn: '24h' })
    res.status(200).json({ "token": token });
});

app.use(expressJWT({ secret: secret })
    .unless(
        {
            path: [
                '/token/sign'
            ]
        }
    ));
app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", '*'); //<-- you can change this with a specific url like http://localhost:4200
    res.header("Access-Control-Allow-Credentials", true);
    res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
    res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
    next();
});
// Configuring the database
const dbConfig = require('./config/database.config.js');
const mongoose = require('mongoose');

mongoose.Promise = global.Promise;

// Connecting to the database
mongoose.connect(dbConfig.url, {
    useNewUrlParser: true
}).then(() => {
    console.log("Successfully connected to the database");
}).catch(err => {
    console.log('Could not connect to the database. Exiting now...', err);
    process.exit();
});

app.get('/', (req, res) => {
    res.json({ "message": " default route " });
});


require('./app/routes/city.routes.js')(app);
require('./app/routes/country.routes.js')(app);
// listen for requests
app.listen(3000, () => {
    console.log("Server is listening on port 3000");
});
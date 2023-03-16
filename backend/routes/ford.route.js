module.exports = (app) =>{
    const router = require('express').Router(); // router tárolja a útvonalakat
    const ford = require('../controllers/ford.controller');

    router.get('/ford',ford.getDeliveryNames)
    
    app.use('/api',router); // default route név
}
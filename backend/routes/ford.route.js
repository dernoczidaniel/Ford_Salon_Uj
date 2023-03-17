module.exports = (app) =>{
    const router = require('express').Router(); // router tárolja a útvonalakat
    const ford = require('../controllers/ford.controller');

    router.get('/ford/getDeliveryNames',ford.getDeliveryNames)
    router.get('/ford/getInteriorColor',ford.getInteriorColor)
    
    app.use('/api',router); // default route név
}
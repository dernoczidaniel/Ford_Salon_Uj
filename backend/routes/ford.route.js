module.exports = (app) =>{
    const router = require('express').Router(); // router tárolja a útvonalakat
    const ford = require('../controllers/ford.controller');

    router.get('/ford/getCars',ford.getCars)
    router.get('/ford/getModels',ford.getModels)

    
    app.use('/api',router); // default route név
}
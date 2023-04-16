const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const User = require('../model/user');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ford_salon'
});

router.get('/register', (req, res) => {
    res.render('register', {
        title: 'Register Page',
        message: req.session.message
    });
});

router.post('/register', (req, res) => {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const telefon = req.body.telefon;
    const address = req.body.address;
    const postalcode = req.body.postalcode;
    const city = req.body.city;
    const birthdate = req.body.birthdate;

    bcrypt.hash(password, 10, (error, hash) => {
        if (error) throw error;

        const query = 'INSERT INTO users (name, email, password, telefon, address, postalcode, city, birthdate) VALUES (?, ?, ?, ?, ?, ?, ?, ?)';

        connection.query(query, [name, email, hash, telefon, address, postalcode, city, birthdate], (error, results) => {
            if (error) throw error;

            req.session.message = 'Registration successful. Please login.';
            res.redirect('/login');
        });
    });
});

router.get('/dashboard', (req, res) => {
    if (!req.session.userId) {
        res.redirect('/login');
    } else {
        const query = 'SELECT * FROM users WHERE id = ?';

        connection.query(query, [req.session.userId], (error, results) => {
            if (error) throw error;

            const user = results[0];
            res.render('dashboard', {
                title: 'Dashboard',
                user: user
            });
        });
    }
});

module.exports = router;

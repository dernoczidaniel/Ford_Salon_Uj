const express = require('express');
const router = express.Router();
const bcrypt = require('bcrypt');
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'ford_salon'
});

router.get('/login', (req, res) => {
    res.render('login', {
        title: 'Login Page',
        message: req.session.message
   
})});

router.post('/login', (req, res) => {
    const email = req.body.email;
    const password = req.body.password;
    const query = 'SELECT * FROM users WHERE email = ?';

    connection.query(query, [email], (error, results) => {
        if (error) throw error;

        if (results.length == 0) {
            res.status(400).json({ message: 'Invalid email or password' });
        } else {
            const user = results[0];

            bcrypt.compare(password, user.password, (error, result) => {
                if (result === true) {
                    req.session.userId = user.id;
                    res.json({ message: 'Login successful' });
                } else {
                    res.status(400).json({ message: 'Invalid email or password' });
                }
            });
        }
    });
});


router.get('/logout', (req, res) => {
    req.session.destroy((error) => {
        if (error) throw error;
        res.redirect('/login');
    });
});

module.exports = router;

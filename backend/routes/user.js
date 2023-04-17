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

router.post('/register', async (req, res) => {
    try {
      const { name, email, password,telefon,address,postalcode,city,birthdate } = req.body;
  
      // ellenőrizzük, hogy az email cím még nem lett-e regisztrálva
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ message: 'Ez az e-mail cím már regisztrálva van' });
      }
  
      // ellenőrizzük, hogy a jelszó nem üres vagy null
      if (!password) {
        return res.status(400).json({ message: 'A jelszó nem lehet üres' });
      }
  
      // létrehozzuk a sót és hash-eljük a jelszót
      const salt = await bcrypt.genSalt(10);
      const hashedPassword = await bcrypt.hash(password, salt);
  
      // létrehozzuk az új felhasználót az adatbázisban
      const newUser = new User({ name, email, password: hashedPassword,telefon,address,postalcode,city,birthdate  });
      const savedUser = await newUser.save();
  
      res.status(201).json({ message: 'Sikeres regisztráció' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ message: 'Hiba történt a regisztráció során' });
    }
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

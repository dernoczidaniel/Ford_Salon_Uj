const express = require('express');
const router = express.Router();
const mysql = require('mysql');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

// Create a MySQL connection
const connection = mysql.createConnection({
  host: 'bgs.jedlik.eu',
  user: 'fordszalon',
  password: 'Fsz2023',
  database: 'fordszalon'
});

// Use body-parser middleware to parse request body
router.use(bodyParser.json());

// Define a POST route to save a new order into the database
router.post('/order', (req, res) => {
  const model = req.body.model;
  const color = req.body.color;
  const interiorcolor = req.body.interiorcolor;
  const extras = req.body.extras;
  const price = req.body.price;

  // Define a SQL query to insert a new row into the "order" table
  const query = 'INSERT INTO order (model, color, interiorcolor, extras, price) VALUES (?, ?, ?, ?, ?)';

  // Execute the SQL query and handle any errors
  connection.query(query, [model, color, interiorcolor, extras, price], (error, results) => {
    if (error) {
      console.error(error);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      res.status(200).json({ message: 'Order saved successfully.' });
    }
  });
});

// Define the transporter to send emails with Nodemailer
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'fordsalonjedlik@gmail.com',
    pass: 'Jedlik2023'
  }
});

// Define the email options
const mailOptions = {
  from: 'fordsalonjedlik@gmail.com',
  to: 'címzett-email-címe@gmail.com',
  subject: 'Rendelés leadva',
  text: 'Sikeresen leadtad a rendelésed.'
};

// Send the email and log the response or any errors
transporter.sendMail(mailOptions, function (error, info) {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});

// Export the router to be used in other modules
module.exports = router;
const express = require('express');
const cors = require('cors');

const corsOptions = {

  origin: 'http://127.0.0.1:5173' // VUE projeckt címe //http://localhost:5173

}
const app = express();

app.use(cors(corsOptions));
app.use(express.json()); // json formátum beállítás
app.use(express.urlencoded({ extended: true }));
const bodyParser = require('body-parser');
app.use(bodyParser.json());


app.get('/', (req, res) => {
  res.json({
    message: 'ok',
  });
});



//Bejelenkezés
app.post('/api/login', (req, res) => {
  const email = req.body.email;
  const password = req.body.password;

  // Itt az adatok validálása
  if (email === 'user@example.com' && password === 'password') {
    res.json({ success: true });
  } else {
    res.json({ success: false });
  }
});
// /Bejelenkezés

//autó valasztas
app.post('/selected-car', (req, res) => {
  const selectedCar = req.body;
  // Itt feldolgozhatod a selectedCar adatokat, pl. elmentheted azokat adatbázisba
  console.log(selectedCar);
  res.status(200).send('OK');
}); 



//Registráció
app.post('/register', (req, res) => {
  const { name, email, password, city } = req.body;

  // Validate the data
  if (!name || !email || !password || !city) {
    return res.status(400).json({ error: 'All fields are required' });
  }

  // Check password strength
  const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
  if (!passwordRegex.test(password)) {
    return res.status(400).json({ error: 'Password is not strong enough' });
  }

  // If data is valid, store it in database or perform other actions
  // ...
  const cookieOptions = {
    httpOnly: true,
    secure: true,
    sameSite: 'strict'
  };
  // Set a cookie with a unique identifier or other data
  const userId = '12345'; // Replace with actual user ID or other data
  res.cookie('userId', userId);

  // Return a success response
  res.json({ message: 'Registration successful' });
});
//  /Registráció


require('./routes/ford.route')(app);

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running http://localhost:${port}`);
});


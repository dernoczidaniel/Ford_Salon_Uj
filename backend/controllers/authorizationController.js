const bcrypt = require("bcrypt");
const connection = require('../Config/database');
const nodemailer = require("nodemailer");


// Általános regisztráció
function signUp(connection) {
  return async (req, res) => {
    const password = req.body.password;
    const password2 = req.body.password_match;
    if (password == password2) {
      try {
        // Email ellenőrzése
        const email = req.body.email;
        connection.query(`SELECT * FROM users WHERE email="${email}"`, async (err, results) => {
          if (err) {
            console.error('Hiba a regisztráció során: ' + err.stack);
            return res.redirect("/");
          }
          if (results.length > 0) {
            res.locals.message = "Az e-mail cím már használatban van!";
            return res.redirect("/");
          }
          // Ha az e-mail cím még nem szerepel az adatbázisban, akkor a felhasználói adatokat hozzáadjuk
          const hashedPassword = await bcrypt.hash(req.body.password, 10);
          connection.query(`INSERT INTO users (name, email, password, address, telefon, city, postalcode, birthdate) VALUES (
            "${req.body.name}", 
            "${req.body.email}", 
            "${hashedPassword}", 
            "${req.body.address}", 
            "${req.body.telefon}", 
            "${req.body.city}", 
            "${req.body.postalcode}", 
            "${req.body.birthdate}", 
            "user"
          )`, (err) => {
            if (err) {
              console.error('Hiba a regisztráció során: ' + err.stack);
              return res.redirect("/");
            }
            // console.log('Sikeresen regisztráció');
            res.redirect("/");
          });
        });
        
      } catch (e) {
        console.log(e);
      }
    } else {
      res.locals.message = "A két jelszó nem egyezik!";
      res.redirect("/");
    }
  };
}

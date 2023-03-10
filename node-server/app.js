
const express = require('express');
const cookieParser = require('cookie-parser');
const serverLog = require('easy-log')('app:server');

const app = express();
app.use((req,res,next) => {
  serverLog(`${req.method} - ${req.originalUrl}`)
})

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());


module.exports = app;

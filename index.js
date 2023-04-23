// const express = require('express');
// const morgan = require('morgan');
// const bodyParser = require('body-parser')
// const cors = require('cors')

// require('dotenv-flow').config();

// require('./routes/middlewares/mongo');
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenvFlow from 'dotenv-flow';
import './routes/middlewares/mongo.js';


const app = express()
const port = 3080

app.use(morgan('dev'))
app.use(cors())

app.use((req, res, next) => {
  if (req.originalUrl === '/api/stripe/webhook') {
    next();
  } else {
    bodyParser.json()(req, res, next);
  }
});

// for parsing application/xwww-
app.use(bodyParser.urlencoded({ extended: true })); 
//form-urlencoded
app.set('jwt', "ebeb1a5ada5cf38bfc2b49ed5b3100e0");

// app.use('/api', require('./routes/api'))
import apiRoutes from "./routes/api.js";
app.use('/api', apiRoutes);
// Default Index Page
// app.use(express.static(__dirname + '/build'));

// app.use(express.static(`${__dirname}/build`));

// Send all other items to index file
// app.get('*', (req, res) => res.sendFile(__dirname + '/build/index.html'));

import path from 'path';

app.use(express.static(path.join(import.meta.url, 'build')));
app.get('*', (req, res) => {
  res.sendFile(path.join(import.meta.url, 'build', 'index.html'));
});


app.listen(port, () => {
  console.log(`Example app listening at ${process.env.DOMAIN}:${port}`)
})
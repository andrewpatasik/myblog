const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();

const app = express();

const routes = require('./routes/routesIndex');

mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

app.use(logger('tiny'));
app.use(cors());

app.use('/api', routes.apiRoute);

app.listen(process.env.PORT || 5000, () => console.log('server strarted.'));

const path = require('path');
const express = require('express');
const passport = require('passport');
const cors = require('cors');
const logger = require('morgan');
require('dotenv').config();

const app = express();

const routes = require('./routes/routes');

const jwtStrategy = require('./middleware/jwt');

// Database Setup //
const mongoose = require('mongoose');
mongoose.connect(process.env.MONGODB_URL);
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'Connection error:'));

// View For Backend //
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// Middleware //
passport.use(jwtStrategy);
app.use(logger('tiny'));
app.use(cors());

// Routes //
app.use('/', routes.indexRoute);
app.use('/auth', routes.authRoute);
app.use('/api', routes.apiRoute);

app.listen(process.env.PORT || 5000, () => console.log('server strarted.'));
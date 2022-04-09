const path = require('path');
const express = require('express');
const passport = require('passport');
const expressLayouts = require('express-ejs-layouts');
const cors = require('cors');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
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
app.set('view engine', 'ejs');
app.use(expressLayouts);
app.set('layout', 'layouts/default.ejs');

// Middleware //
passport.use(jwtStrategy);
app.use(bodyParser.json());
app.use(cookieParser());
app.use(bodyParser.urlencoded({ extended: true }))
app.use(express.static('public'));
app.use(logger('tiny'));
app.use(cors());
app.use(passport.initialize());

// Routes //
app.use('/', routes.indexRoute);
app.use('/auth', routes.authRoute);
app.use('/api', routes.apiRoute);
app.use('/editor', routes.editorRoute);

app.listen(process.env.PORT || 5000, () => console.log('server strarted.'));
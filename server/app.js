const express = require('express');
const cors = require('cors');
const logger = require('morgan');

const app = express();

app.use(logger('tiny'));
app.use(cors());

app.get('/api', (req, res) => res.send({ message: '/api'}));

app.listen(5000, () => console.log('server strarted.'));

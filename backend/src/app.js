const express = require('express');
const cors = require('cors');
const app = express();

// Settings
app.set('PORT', process.env.PORT || 4000);

// Milddlewares
app.use(cors());
app.use(express.json());

// Routes
app.use('/api/users', require('./routes/users.routes'));

module.exports = app;
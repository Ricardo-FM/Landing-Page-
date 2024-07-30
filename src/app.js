const express = require('express');
const db = require('../config/database');
//creates routes and connects to file in project
const leadRoutes = require('./routes/leadRoutes');
require('dotenv').config();
const dbServices = require('../services/databaseServices');

//Instantiate express & server
const app = express();
const port = process.env.PORT || 3000;

// Middleware to parse JSON bodies
app.use(express.json());

//any route with this path/endpoint /api/leads will use these routers
app.use('/api/leads', leadRoutes);

// Test route to verify database connection
app.get('/test-db', async (req, res) => {
  try {
    const result = await db.query('SELECT NOW()');
    res.json({ message: 'Database connected successfully', time: result.rows[0].now });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Database connection failed' });
  }
});


//listen for server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});




// const { Pool } = require('pg');
// require('dotenv').config();

// const pool = new Pool({
//   user: process.env.DB_USER,
//   host: process.env.DB_HOST,
//   database: process.env.DB_NAME,
//   password: String(process.env.DB_PASSWORD), // Explicitly convert to string
//   port: parseInt(process.env.DB_PORT, 10),
//   ssl: {
//     rejectUnauthorized: false
//   }
// });

// pool.query('SELECT NOW()', (err, res) => {
//   if (err) {
//     console.error('Error connecting to the database:', err);
//   } else {
//     console.log('Connected to the database. Current time:', res.rows[0].now);
//   }
//   pool.end();
// });





const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');

// Path to the RDS CA certificate
const caCertPath = path.resolve('config/rds-combined-ca-bundle.pem');
const caCert = fs.readFileSync(caCertPath);

// Create a new pool of connections
const pool = new Pool({
  user: 'postgres',
  host: 'apllc-db.c5usq0sq0ywh.us-east-2.rds.amazonaws.com',
  database: 'ap-db',
  password: 'United_states123',
  port: 5432,
  ssl: {
    rejectUnauthorized: true,
    ca: caCert.toString()
  }
});

// Example query to verify the connection
pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database', err);
  } else {
    console.log('Connection successful:', res.rows);
  }

});

async function testConnection() {
  try {
    const result = await pool.query('SELECT NOW()');
    console.log('Connection successful:', result.rows);
    pool.end();
  } catch (err) {
    console.error('Error connecting to the database:', err);
    pool.end();
  }
}

testConnection();
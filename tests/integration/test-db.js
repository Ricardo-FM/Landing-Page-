const { Pool } = require('pg');
const fs = require('fs');
require('dotenv').config();

//Normal
const pool2  = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASSWORD),
    port: parseInt(process.env.DB_PORT, 10),
    ssl: false
});

//NON SSL
const pool  = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASSWORD),
    port: parseInt(process.env.DB_PORT, 10),
    ssl: {
      rejectUnauthorized: false,  // Set to false for now for testing
      ca: fs.readFileSync(process.env.SSL_CERT_PATH).toString(),
    }
});

//SSL ONLY
const connectionString = `postgresql://postgres:${encodeURIComponent(process.env.DB_PASSWORD)}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=require`;

const poolSSL = new Pool({
  connectionString,
  ssl: {
    rejectUnauthorized: false,  // Set to false for now for testing
    ca: fs.readFileSync(process.env.SSL_CERT_PATH).toString(),
  }
});

//cert test
const poolcert = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: String(process.env.DB_PASSWORD),
    port: parseInt(process.env.DB_PORT, 10),
    ssl: {
      rejectUnauthorized: false,  // Set to false for now for testing
      ca: fs.readFileSync(process.env.SSL_CERT_PATH).toString(),
    }
});

pool.query('SELECT NOW()', (err, res) => {
  if (err) {
    console.error('Error connecting to the database:', err);
  } else {
    console.log('Connected to the database. Current time:', res.rows[0].now);
  }
  pool.end();
});
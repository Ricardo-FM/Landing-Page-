// const { Pool } = require('pg');
// const fs = require('fs');
// require('dotenv').config();

// const pool  = new Pool({
//     user: process.env.DB_USER,
//     host: process.env.DB_HOST,
//     database: process.env.DB_NAME,
//     password: 'United_states123',
//     port: parseInt(process.env.DB_PORT, 10),
//     ssl: {
//       rejectUnauthorized: false,  // Set to false for now for testing
//       ca: fs.readFileSync(process.env.SSL_CERT_PATH).toString(),
//     }
// });


// // const connectionString = `postgresql://postgres:${encodeURIComponent(process.env.DB_PASSWORD)}@${process.env.DB_HOST}:${process.env.DB_PORT}/${process.env.DB_NAME}?sslmode=require`;

// // const pool2 = new Pool({
// //   connectionString,
// //   ssl: {
// //     rejectUnauthorized: false,
// //     ca: fs.readFileSync(process.env.SSL_CERT_PATH).toString(),
// //   }
// // });

// module.exports = {
//   query: (text, params) => pool.query(text, params),
// };


const { Pool } = require('pg');
const fs = require('fs');
const path = require('path');
const express = require('express');
require('dotenv').config();

// Read the CA certificate from the file specified in the environment variable
const caCertPath = path.resolve(process.env.DB_SSL_CA_PATH);
const caCert = fs.readFileSync(caCertPath);

// Create a new pool of connections
const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD,
    port: 5432,
    ssl: {
        rejectUnauthorized: true,
        ca: caCert.toString()
    }
});


const app = express();

app.get('/data', async (req, res) => {
  try {
    const result = await pool.query('SELECT * personal_loan');
    res.json(result.rows);
  } catch (err) {
    console.error('Error querying the database', err);
    res.status(500).send('Internal Server Error');
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
require('dotenv').config();
const knex = require('knex');
const knexConfig = require('../../knexfile.js');

const environment = process.env.NODE_ENV || 'development';
const db = knex(knexConfig[environment]);

async function testConnection() {
  try {
    const results = await db.select('*').from('leads');
    console.log('Database connection successful. Leads:', results);
  } catch (error) {
    console.error('Error connecting to the database:', error);
  } finally {
    await db.destroy(); // Close the connection
  }
}

testConnection();

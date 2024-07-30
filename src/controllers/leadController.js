// Import database Services
const dbServices = require('../services/databaseServices');
// Import database
const db = require('../config/database'); 
// Import your Lead model
const Lead = require('../models/lead'); 


// Function to get lead
exports.getAllLeads = async (req, res) => {
  try {
    const leads = await db('personal_loans').select('*');
    res.json(leads);

  } catch (err) {
    console.error('Error retrieving leads:', err);
    res.status(500).send('Internal Server Error');
  }
};

// Function to create a new lead
exports.createLead = async (req, res) => {
  try {
    const [newLead] = await db('personal_loans').insert(req.body).returning('*');
    res.status(201).json(newLead);

  } catch (err) {
    console.error('Error creating lead:', err);
    res.status(500).send('Internal Server Error');
  }
};

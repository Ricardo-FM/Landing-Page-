const express = require('express');
const router = express.Router();
const Lead = require('../models/lead');
const leadController = require('../controllers/leadController');


// Define routes to create and get leads
router.get('/', leadController.getAllLeads);
router.post('/', leadController.createLead);

//
router.post('/', async (req, res) => {
  try {
    const lead = await Lead.create(req.body);
    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

router.get('/:id', async (req, res) => {
  try {
    const lead = await Lead.findById(req.params.id);
    if (lead) {
      res.json(lead);
    } else {
      res.status(404).json({ message: 'Lead not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
const Lead = require('../models/Lead');
const knex = require('../../knexfile');

describe('Lead Model', () => {
  beforeAll(async () => {
    await knex.migrate.latest();
  });

  afterAll(async () => {
    await knex.destroy();
  });

  afterEach(async () => {
    await knex('leads').truncate();
  });

  it('should create a new lead', async () => {
    const lead = await Lead.create({
      first_name: 'John',
      last_name: 'Doe',
      email: 'john@example.com',
      phone: '1234567890',
      loan_amount: 10000,
      loan_purpose: 'Home improvement',
      credit_score: 750,
      annual_income: 75000
    });

    expect(lead).toHaveProperty('id');
    expect(lead.first_name).toBe('John');
    expect(lead.email).toBe('john@example.com');
  });

  it('should find a lead by id', async () => {
    const createdLead = await Lead.create({
      first_name: 'Jane',
      last_name: 'Doe',
      email: 'jane@example.com',
      phone: '0987654321',
      loan_amount: 20000,
      loan_purpose: 'Debt consolidation',
      credit_score: 700,
      annual_income: 80000
    });

    const foundLead = await Lead.findById(createdLead.id);
    expect(foundLead).toEqual(createdLead);
  });

  // Add more tests for other methods
});
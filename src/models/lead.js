const config = require('../../knexfile');
const knex = require('knex')(config);
const db = knex(knexConfig);

class Lead {
  static async create(lead) {
    try {
      return await knex('personal_loans').insert(lead).returning('*');
    } catch (err) {
      console.error('Error creating lead:', err);
      throw err; // Consider throwing an error or handling it as per your application's needs
    }
  }

  static async findById(id) {
    return knex('personal_loans').where({ id }).first();
  }

  static async findAll() {
    return knex('personal_loans').select('*');
  }

  static async update(id, updatedData) {
    return knex('personal_loans')
      .where({ id })
      .update(updatedData)
      .returning('*');
  }

  static async delete(id) {
    return knex('personal_loans')
      .where({ id })
      .del()
      .returning('*');
  }
}

module.exports = Lead;

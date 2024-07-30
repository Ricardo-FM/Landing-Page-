// /**
//  * @type {import('node-pg-migrate').ColumnDefinitions | undefined}
//  */
// exports.shorthands = undefined;

// /**
//  * @param pgm {import('node-pg-migrate').MigrationBuilder}
//  * @param run {() => void | undefined}
//  * @returns {Promise<void> | void}
//  */
// exports.up = (pgm) => {};

// /**
//  * @param pgm {import('node-pg-migrate').MigrationBuilder}
//  * @param run {() => void | undefined}
//  * @returns {Promise<void> | void}
//  */
// exports.down = (pgm) => {};

exports.up = function(knex) {
    return knex.schema.createTable('leads', (table) => {
      table.increments('id').primary();
      table.string('first_name', 50).notNullable();
      table.string('last_name', 50).notNullable();
      table.string('email', 100).notNullable();
      table.date('date_of_birth').notNullable();
      table.string('ssn', 11).notNullable();
      table.string('phone', 15).notNullable();
      table.string('address', 50).notNullable();
      table.string('zip_code', 5).notNullable();
      table.string('drivers_license', 50).notNullable();
      table.string('drivers_license_state', 2).notNullable();
      table.integer('requested_loan_amount').notNullable();
      table.string('loan_purpose', 100).notNullable();
      table.string('credit', 50).notNullable();
      table.boolean('own_home').notNullable();
      table.string('employer_name', 100).notNullable();
      table.integer('months_at_company').notNullable();
      table.string('income_type', 50).notNullable();
      table.integer('monthly_income').notNullable();
      table.date('pay_date').notNullable();
      table.string('pay_frequency', 50).notNullable();
      table.boolean('direct_deposit').notNullable();
      table.string('bank_name', 50).notNullable();
      table.string('bank_account_type', 50).notNullable();
      table.string('bank_aba', 9).notNullable();
      table.string('bank_account_number', 30).notNullable();
      table.boolean('active_military').notNullable();
      table.integer('campaign_id').notNullable();
      table.string('campaign_key', 50).notNullable();
      table.string('client_ip', 45).notNullable();
      table.integer('lead_type_id').notNullable();
      table.string('status', 50).defaultTo('new');
      table.timestamp('created_at').notNullable().defaultTo(knex.fn.now());
      table.timestamp('updated_at').notNullable().defaultTo(knex.fn.now());
  
      // Add check constraints
      table.check('LENGTH(first_name) <= 50');
      table.check('LENGTH(last_name) <= 50');
      table.check('LENGTH(email) <= 100');
      table.check('LENGTH(ssn) = 11');
      table.check('LENGTH(phone) <= 15');
      table.check('LENGTH(address) BETWEEN 3 AND 50');
      table.check('LENGTH(zip_code) = 5');
      table.check('LENGTH(drivers_license) <= 50');
      table.check('LENGTH(drivers_license_state) = 2');
      table.check('LENGTH(loan_purpose) BETWEEN 2 AND 100');
      table.check('LENGTH(credit) <= 50');
      table.check('months_at_company BETWEEN 1 AND 1000');
      table.check('monthly_income BETWEEN 750 AND 15000');
      table.check('LENGTH(pay_frequency) <= 50');
      table.check('LENGTH(bank_name) BETWEEN 2 AND 50');
      table.check('LENGTH(bank_account_type) <= 50');
      table.check('LENGTH(bank_aba) = 9');
      table.check('LENGTH(bank_account_number) BETWEEN 4 AND 30');
      table.check('LENGTH(campaign_key) BETWEEN 2 AND 50');
      table.check('LENGTH(client_ip) <= 45');
    });
  };
  
  exports.down = function(knex) {
    return knex.schema.dropTableIfExists('leads');
  };
  
  
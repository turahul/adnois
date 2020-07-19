'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class CustomerDetailSchema extends Schema {
  up () {
    this.create('customer_details', (table) => {
      table.increments()
      table.timestamps()
      table.string("email")
      table.string("phone")
      table.string("address")
      table.string("date_of_birthday")
      table.integer('customer_id').unsigned()
      table
        .foreign('customer_id')
        .references('customers.id')
        .onDelete('cascade')
     
    
    })
  }

  down () {
    this.drop('customer_details')
  }
}

module.exports = CustomerDetailSchema

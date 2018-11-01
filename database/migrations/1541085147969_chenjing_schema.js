'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChenjingSchema extends Schema {
  up () {
    this.create('chenjings', (table) => {
      table.increments()
      table.string("title")
      table.timestamps()
    })
  }

  down () {
    this.drop('chenjings')
  }
}

module.exports = ChenjingSchema

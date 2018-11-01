'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class ChenjingAddContentColumSchema extends Schema {
  up () {
    this.table('chenjings', (table) => {
      // alter table
      table.text('content','longtext')
    })
  }

  down () {
    this.table('chenjings', (table) => {
      // reverse alternations
      table.dropColumn('content')
    })
  }
}

module.exports = ChenjingAddContentColumSchema

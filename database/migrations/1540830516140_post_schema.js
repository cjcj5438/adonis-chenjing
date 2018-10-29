'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
// 创建数据表的时候 是knex 的结构来创建的
const Schema = use('Schema')

class PostSchema extends Schema {
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.timestamps()
    })
  }

  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema

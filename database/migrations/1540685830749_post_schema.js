'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class PostSchema extends Schema {
  // up 是创建数据表
  up () {
    this.create('posts', (table) => {
      table.increments()
      table.string('title')
      table.text('content','longtext')
      table.timestamps()
    })
  }
  //删除这个表
  down () {
    this.drop('posts')
  }
}

module.exports = PostSchema

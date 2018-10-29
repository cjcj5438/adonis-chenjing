'use strict'

/** @type {import('@adonisjs/lucid/src/Schema')} */
const Schema = use('Schema')

class UserSchema extends Schema {
  //想要执行的事情
  up () {
    this.create('users', (table) => {
      // id 值
      table.increments()
      // notNullable() 不可为空 .unique() 唯一值
      table.string('username', 80).notNullable().unique()
      table.string('email', 254).notNullable().unique()
      table.string('password', 60).notNullable()
      // 会记录数据跟新的那个日期. 和数据最近更新的那个日期
      table.timestamps()
    })
  }
  // 回滚的事务
  down () {
    this.drop('users')
  }
}

module.exports = UserSchema

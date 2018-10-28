'use strict'

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */

const Route = use('Route')

Route.on('/').render('welcome')

// Route.get('/posts',"PostController.index")
// Route.post('/posts',"PostController.store")
// Route.get('/posts/create',"PostController.create")
// Route.get('/posts/:id',"PostController.show")
// Route.patch('/posts/:id',"PostController.update")
// Route.delete('/posts/:id',"PostController.destory")
// Route.get('/posts/:id/edit',"PostController.edit")

Route.resource('posts', 'PostController')
// .apiOnly() //他会去掉创建编辑相关的路由
// .only(['index','show'])//只进的路劲
// .except(['index'])//去除

// 命名路由  如果是用{ }  那么里面一定要写return的
Route.get('/usersxxxxxxxxxxxxxxxxxxx', () => 'list of users')
  .as('users.index')


// 路由格式 这里我不知道为什么要参数解构的方式来写
Route.get('/users', ({request}) => {
  switch (request.format()) {
    case 'json':
      return [
        {name: 'chenjing'}
      ]
    default:
      return `
      默认-
      chenjing`
  }
})// 这有一个formats 有s 的单词不要写错   设置规定的格式
  .formats(['json', 'html'], true)


// 路由群组
Route
  .group(() => {
    Route.get('users', () => 'manage users')
    Route.get('posts', () => 'manage posts')
  })
  .prefix('admin') // 设置公共的前缀

// 单页应用的路由
Route.any('*',({view})=>{view.render('welcome')})

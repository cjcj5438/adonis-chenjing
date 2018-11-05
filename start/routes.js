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
const Database = use('Database')
const Route = use('Route')

Route.on('/').render('welcome')

// 定义一条资源类型的控制器
Route.resource('posts', 'PostController')


Route.get("/getsession", ({session, response}) => {
  session.put("username", "chenjing")
  response.redirect("/postsession")
})
Route.get('/postsession', ({session}) => {
  return session.get("username")
})

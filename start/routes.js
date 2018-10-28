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

/*先写一个路由. 在写一个控制器  context 里面有很多东西. 但是我们只要使用request ES5的语法解构出来*/

// Route.get('/posts',(context)=>{})
Route.get('/gets', ({request}) => request.get())

// 获取post 请求参数
Route.post('/posts', ({request}) => request.post())

//  all 可以获取get 和post 两种方式的 请求参数
Route.post('/alls', ({request}) => request.all())

// only 指定获取的参数
Route.post('/only', ({request}) => request.only(["xxx","ccc"]))

// excpet 指定除去xxx参数 以外的参数
Route.post('/excpet', ({request}) => request.excpet(["xxxx"]))

//如果参数里面没有这个值. 给他一个默认值
Route.post('/input', ({request}) => request.input("name","默认值23"))

//

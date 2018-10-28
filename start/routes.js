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

//先写一个路由. 在写一个控制器  context 里面有很多东西. 但是我们只要使用request ES5的语法解构出来*/

// Route.get('/posts',(context)=>{})
Route.get('/gets', ({request}) => request.get())

// 获取post 请求参数
Route.post('/posts', ({request}) => request.post())

//  all 可以获取get 和post 两种方式的 请求参数
Route.post('/alls', ({request}) => request.all())

// only 指定获取的参数
Route.post('/only', ({request}) => request.only(["xxx", "ccc"]))

// excpet 指定除去xxx参数 以外的参数
Route.post('/excpet', ({request}) => request.excpet(["xxxx"]))

//如果参数里面没有这个值. 给他一个默认值
Route.post('/input', ({request}) => request.input("name", "默认值23"))
/* 当表单这个时候的数据的时候. 复杂嵌套
title[0]: chen
content[0]: jing
title[1]: chenjing
content[1]: chenjing*/
Route.post('/posts', ({request}) => request.collect(["title", "content"]))

/*
[
  {
    "title": "chen",
    "content": "jing"
  },
  {
    "title": "chenjing",
    "content": "chenjing"
  }
]
*/

// 获取头部信息 , 记住不要忘记单词s
Route.get('/headers', ({request}) => request.headers())
// 得到具体某条header 信息时  这只能一条一条的拿
Route.get('/header', ({request}) => request.header("user-agent"))

// 返回html格式
Route.get('html', ({request, response}) => {
  // text/html 格式改成纯文本格式
  // response.header("Content-type", "text/plain")
  // 简化写法
  // response.type("text/plain")
  return `<h1>list of post ${request}</h1>`
})


// cookie
Route.get('/cookie', ({request, response}) => {
  // 设置cookie 值
  response.cookie("theme", "dark")
  // 删除cookies
  response.clearCookie('theme')// 清除了dark
  return request.cookie('theme', 'light')   // 这样写的话. 就是当theme 没有值的时候,给他一个默认值.light
  // return request.cookies() 返回所有cookies 信息
})

// 设置相应数据
Route.get('/res', ({response}) => {
  response.send("chenjing send") // 写得多也就只会显示一个
  response.send("chenjing send")
  response.send("chenjing send")
  response.send("chenjing send")
  // 也可以写成 retrun  .... 结果是一样的
})


// 当我们查询数据的时候是异步查询的
const delay = (data, time) => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(data)
    }, time)
  })
}
// 因为查询数据是异步的,  使用 async 函数
Route.get('/db', async ({response}) => {
  return await delay({"name": "chenjing"}, 3000)
})

// 重定向1
Route.get('/list-of-posts', ({response}) =>
  //第一个地址是重定向的地址, 第二个参数 参数也会跟着重定向过去,  第三个参数是状态码
  response.redirect('/dir', true, 301)
)
Route.get('/dir', () => '重定向')

// 重定向2
Route.get('/list-of-get', ({response}) =>
  response.route('list-of-get')
)
// 带上参数. 参数后面的? 是可选的意思
Route.get('/dir', ({params}) => `重定向`).as('  list-of-get')

// 重定向3
Route.get('/list-of-get-chenjing', ({response}) =>
  response.route('list-of-get', {category: 'food'})
)
// 带上参数. 参数后面的? 是可选的意思
Route.get('/dir/:category?', ({params}) => `重定向${params.category || 'defaule'} ok`).as('list-of-get')


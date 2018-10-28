'use strict'

class PostController {
  // 可以返回get请求的地址
  // view 是从context 里面结构出来的
  index({view}) {
    const pageTitle = '我是谁 <b>我是谁</b> '
    const user = {
      name: "chenjing"
    }
    const entities = [
      {id: 1, title: 'lemon1', content: '柠檬1'},
      {id: 2, title: 'lemon2', content: '柠檬2'},
      {id: 3, title: 'lemon3', content: '柠檬3'},
    ]
    return view.render('posts.index', {pageTitle, user, entities})
  }
}

module.exports = PostController

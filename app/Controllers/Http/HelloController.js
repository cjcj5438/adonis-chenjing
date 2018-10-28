'use strict'

class HelloController {
  render ({request,view}){
    const name=request.input('name');
    // 返回视图的名字
    return view.render('hello',{name})
  }
}

module.exports = HelloController

'use strict'

class PostController {
  index(){
    return `chenjingget`
  }
  // 创建资源
  store(){
    return `Post has been created.`
  }
  // 显示单个资源的方法
  show({params}){
    return `you watching show ${params.id}`
  }
  // 更新单个资源
  update({params}){
    return `you watching update ${params.id}`
  }
  // 删除资源
  destory({params}){
    return `you watching destory ${params.id}`
  }
  create(){
    return `create`
  }
  edit({params}){
    return `you watching edit ${params.id}`
  }
}

module.exports = PostController

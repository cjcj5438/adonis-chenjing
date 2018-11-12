'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with posts
 */
const Database = use('Database')
const Chenjing = use('App/Models/Chenjing')

class PostController {
  /**
   * Show a list of all posts.
   * GET posts
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async index({request, response, view}) {
    const chenjings = await Chenjing.all();
    // post文件下面的index.edge
    return view.render('post.index', {chenjings: chenjings.toJSON()});
    // return chenjings;

  }

  /**
   * Render a form to be used for creating a new post.
   * GET posts/create
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async create({request, response, view}) {
    return view.render('post.create')
  }

  /**
   * Create/save a new post.
   * POST posts
   * 这个是直接插入数据库
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  /*async store({request, response}) {

    const newPost = request.only(['title', 'content'])
    // insert 要插入的具体的数据, into 插入的数据表示
    const postID = await Database.insert(newPost).into('chenjings')
    console.log("postID:", postID);
    return response.redirect(`posts/${postID[0]}`)
  }*/

  // 下面使用model 的方法来写入数据
  async store({request, response}) {

    const newPost = request.only(['title', 'content'])
    //使用模型的方法来插入数据
    // 保存用户输入的数据
    const post = await Chenjing.create(newPost)
    // console.log("postID:", postID);
    return response.redirect(`posts/${post.id}`)
  }

  /**
   * Display a single post.
   * GET posts/:id
   *显示 查询的数据记录  第一个是用数据语句
   * 后面一个是使用model来做
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  // async show({params, request, response, view}) {
  //   const post = await Database
  //     .from('chenjings')
  //     .where('id', params.id)
  //     .first()
  //   return view.render('post.show', {post})
  // }
  async show({params, request, response, view}) {
    const post = await Chenjing.find(params.id)
    return view.render('post.show', {post})
  }

  /**
   * Render a form to update an existing post.
   * GET posts/:id/edit  这里的eait指的是方法名 ,不是view 下的文件名
   *  编辑资源. 然后这个使用model来操作编辑支援
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  // async edit({params, request, response, view}) {
  //   const post = await Database
  //     .from('chenjings')
  //     .where('id', params.id)
  //     .first()
  //   return view.render('post.edit', {post})
  // }
  async edit({params, request, response, view}) {
    const post = await Chenjing.findOrFail(params.id)
    return view.render('post.edit', {post: post.toJSON()})
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   * 更新数据. 然后在用模型的方法
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  // async update({params, request, response}) {
  //   const updatedPost = request.only(['title', 'content'])
  //   await Database
  //     .table('chenjings')
  //     .where('id', params.id)
  //     .update(updatedPost)
  // }
  async update({params, request, response}) {
    const updatedPost = request.only(['title', 'content'])
    const  post= await Chenjing.findOrFail(params.id)
    post.merge(updatedPost)
    post.save();
  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   * 删除资源
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  // async destroy({params, request, response}) {
  //   await Database
  //     .table('chenjings')
  //     .where('id', params.id)
  //     .delete()
  //   return 'success'
  // }
  async destroy({params, request, response}) {
    const post = await Chenjing.find(params.id)
    post.delete()
    return 'success'
  }
}

module.exports = PostController

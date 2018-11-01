'use strict'

/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */

/**
 * Resourceful controller for interacting with posts
 */
const Database = use('Database')

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
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async store({request, response}) {
    const newPost = request.only(['title', 'content'])
    // insert 要插入的具体的数据, into 插入的数据表示
    const postID = await Database.insert(newPost).into('chenjings')
    console.log("postID:", postID);
    return response.redirect(`posts/${postID[0]}`)
  }

  /**
   * Display a single post.
   * GET posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async show({params, request, response, view}) {
    const post = await Database
      .from('chenjings')
      .where('id', params.id)
      .first()
    return view.render('post.show', {post})
  }

  /**
   * Render a form to update an existing post.
   * GET posts/:id/edit  这里的eait指的是方法名 ,不是view 下的文件名
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   * @param {View} ctx.view
   */
  async edit({params, request, response, view}) {
    const post = await Database
      .from('chenjings')
      .where('id', params.id)
      .first()
    return view.render('post.edit', {post})
  }

  /**
   * Update post details.
   * PUT or PATCH posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async update({params, request, response}) {
    const updatedPost=request.only(['title','content'])
    await Database
      .table('chenjings')
      .where('id',params.id)
      .update(updatedPost)
  }

  /**
   * Delete a post with id.
   * DELETE posts/:id
   *
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Response} ctx.response
   */
  async destroy({params, request, response}) {
    await Database
      .table('chenjings')
      .where('id',params.id)
      .delete()
    return 'success'
  }
}

module.exports = PostController

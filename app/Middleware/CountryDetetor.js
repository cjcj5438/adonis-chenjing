'use strict'
/** @typedef {import('@adonisjs/framework/src/Request')} Request */
/** @typedef {import('@adonisjs/framework/src/Response')} Response */
/** @typedef {import('@adonisjs/framework/src/View')} View */
// const geoip = require('geoip-lite') // 这个是用应ip 地址处理的

class CountryDetetor {
  /**
   * @param {object} ctx
   * @param {Request} ctx.request
   * @param {Function} next
   */
  async handle({request}, next) {
    // // call next to advance the request
    // const ip = request.ip()
    // request.country = geoip.lookup(ip).country
    await next()
  }
}

module.exports = CountryDetetor

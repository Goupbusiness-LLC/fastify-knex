'use strict'

const fastifyPlugin = require('fastify-plugin')
const knex = require('knex')

module.exports = fastifyPlugin((fastify, opts, next) => {
  try {
    const handler = knex(opts || null)

    fastify
      .decorate('knex', handler)
      .addHook('onClose', (instance, done) => {
        if (instance.knex === handler) {
          instance.knex.destroy()
          delete instance.knex
        }

        done()
      })

    next()
  } catch (err) {
    next(err)
  }
}, '>=0.30.0')
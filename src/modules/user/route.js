/**
 * the user routes
 */

const Controller = require('./controller')
const consts = require('../../consts')

module.exports = {
  '/users': {
    get: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:user', 'all:user']
    },
    post: {
      method: Controller.create,
      auth: 'jwt',
      scopes: ['create:user', 'all:user']
    },
    head: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:user', 'all:user']
    }
  },
  '/users/:id': {
    get: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:user', 'all:user']
    },
    head: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:user', 'all:user']
    },
    patch: {
      method: Controller.patch,
      auth: 'jwt',
      scopes: ['update:user', 'all:user']
    },
    delete: {
      method: Controller.remove,
      auth: 'jwt',
      access: [consts.UserRoles.admin],
      scopes: ['delete:user', 'all:user']
    }
  }
}

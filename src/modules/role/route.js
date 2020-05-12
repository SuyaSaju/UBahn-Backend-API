/**
 * the roles routes
 */

const Controller = require('./controller')
const consts = require('../../consts')
module.exports = {
  '/roles': {
    get: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:role', 'all:role']
    },
    post: {
      method: Controller.create,
      auth: 'jwt',
      scopes: ['create:role', 'all:role']
    },
    head: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:role', 'all:role']
    }
  },
  '/roles/:id': {
    get: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:role', 'all:role']
    },
    head: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:role', 'all:role']
    },
    patch: {
      method: Controller.patch,
      auth: 'jwt',
      scopes: ['update:role', 'all:role']
    },
    delete: {
      method: Controller.remove,
      auth: 'jwt',
      access: [consts.UserRoles.admin],
      scopes: ['delete:role', 'all:role']
    }
  }
}

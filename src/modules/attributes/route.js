/**
 * the attribute routes
 */

const Controller = require('./controller')
const consts = require('../../consts')
module.exports = {
  '/attributes': {
    get: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:attribute', 'all:attribute']
    },
    post: {
      method: Controller.create,
      auth: 'jwt',
      scopes: ['create:attribute', 'all:attribute']
    },
    head: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:attribute', 'all:attribute']
    }
  },
  '/attributes/:id': {
    get: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:attribute', 'all:attribute']
    },
    head: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:attribute', 'all:attribute']
    },
    patch: {
      method: Controller.patch,
      auth: 'jwt',
      scopes: ['update:attribute', 'all:attribute']
    },
    delete: {
      method: Controller.remove,
      auth: 'jwt',
      access: [consts.UserRoles.admin],
      scopes: ['delete:attribute', 'all:attribute']
    }
  }
}

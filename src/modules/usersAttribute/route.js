/**
 * the achievement routes
 */

const Controller = require('./controller')
const consts = require('../../consts')
module.exports = {
  '/users/:userId/attributes': {
    get: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:achievement', 'all:achievement']
    },
    post: {
      method: Controller.create,
      auth: 'jwt',
      scopes: ['create:achievement', 'all:achievement']
    },
    head: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:achievement', 'all:achievement']
    }
  },
  '/users/:userId/attributes/:attributeId': {
    get: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:achievement', 'all:achievement']
    },
    head: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:achievement', 'all:achievement']
    },
    patch: {
      method: Controller.patch,
      auth: 'jwt',
      scopes: ['update:achievement', 'all:achievement']
    },
    delete: {
      method: Controller.remove,
      auth: 'jwt',
      access: [consts.UserRoles.admin],
      scopes: ['delete:achievement', 'all:achievement']
    }
  }
}

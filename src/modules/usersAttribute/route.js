/**
 * the userAttributes routes
 */

const Controller = require('./controller')
const consts = require('../../consts')
module.exports = {
  '/users/:userId/attributes': {
    get: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:usersAttribute', 'all:usersAttribute']
    },
    post: {
      method: Controller.create,
      auth: 'jwt',
      scopes: ['create:usersAttribute', 'all:usersAttribute']
    },
    head: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:usersAttribute', 'all:usersAttribute']
    }
  },
  '/users/:userId/attributes/:attributeId': {
    get: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:usersAttribute', 'all:usersAttribute']
    },
    head: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:usersAttribute', 'all:usersAttribute']
    },
    patch: {
      method: Controller.patch,
      auth: 'jwt',
      scopes: ['update:usersAttribute', 'all:usersAttribute']
    },
    delete: {
      method: Controller.remove,
      auth: 'jwt',
      access: [consts.UserRoles.admin],
      scopes: ['delete:usersAttribute', 'all:usersAttribute']
    }
  }
}

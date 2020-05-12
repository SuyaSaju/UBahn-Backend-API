/**
 * the users role routes
 */

const Controller = require('./controller')
const consts = require('../../consts')
module.exports = {
  '/users/:userId/roles': {
    get: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:usersRole', 'all:usersRole']
    },
    post: {
      method: Controller.create,
      auth: 'jwt',
      scopes: ['create:usersRole', 'all:usersRole']
    },
    head: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:usersRole', 'all:usersRole']
    }
  },
  '/users/:userId/roles/:roleId': {
    get: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:usersRole', 'all:usersRole']
    },
    head: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:usersRole', 'all:usersRole']
    },
    patch: {
      method: Controller.patch,
      auth: 'jwt',
      scopes: ['update:usersRole', 'all:usersRole']
    },
    delete: {
      method: Controller.remove,
      auth: 'jwt',
      access: [consts.UserRoles.admin],
      scopes: ['delete:usersRole', 'all:usersRole']
    }
  }
}

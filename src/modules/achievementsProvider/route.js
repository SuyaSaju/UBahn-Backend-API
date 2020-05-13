/**
 * the achievementsProvider routes
 */

const Controller = require('./controller')
const consts = require('../../consts')
module.exports = {
  '/achievementsProviders': {
    get: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:achievementsProvider', 'all:achievementsProvider']
    },
    post: {
      method: Controller.create,
      auth: 'jwt',
      scopes: ['create:achievementsProvider', 'all:achievementsProvider']
    },
    head: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:achievementsProvider', 'all:achievementsProvider']
    }
  },
  '/achievementsProviders/:id': {
    get: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:achievementsProvider', 'all:achievementsProvider']
    },
    head: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:achievementsProvider', 'all:achievementsProvider']
    },
    patch: {
      method: Controller.patch,
      auth: 'jwt',
      scopes: ['update:achievementsProvider', 'all:achievementsProvider']
    },
    delete: {
      method: Controller.remove,
      auth: 'jwt',
      access: [consts.UserRoles.admin],
      scopes: ['delete:achievementsProvider', 'all:achievementsProvider']
    }
  }
}

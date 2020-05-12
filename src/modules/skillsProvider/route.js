/**
 * the skillsProvider routes
 */

const Controller = require('./controller')
const consts = require('../../consts')
module.exports = {
  '/skillsProviders': {
    get: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:skillsProvider', 'all:skillsProvider']
    },
    post: {
      method: Controller.create,
      auth: 'jwt',
      scopes: ['create:skillsProvider', 'all:skillsProvider']
    },
    head: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:skillsProvider', 'all:skillsProvider']
    }
  },
  '/skillsProviders/:id': {
    get: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:skillsProvider', 'all:skillsProvider']
    },
    head: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:skillsProvider', 'all:skillsProvider']
    },
    patch: {
      method: Controller.patch,
      auth: 'jwt',
      scopes: ['update:skillsProvider', 'all:skillsProvider']
    },
    delete: {
      method: Controller.remove,
      auth: 'jwt',
      access: [consts.UserRoles.admin],
      scopes: ['delete:skillsProvider', 'all:skillsProvider']
    }
  }
}

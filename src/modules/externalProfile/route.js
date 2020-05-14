/**
 * the externalProfile routes
 */

const Controller = require('./controller')
const consts = require('../../consts')
module.exports = {
  '/users/:userId/externalProfiles': {
    get: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:externalProfile', 'all:externalProfile']
    },
    post: {
      method: Controller.create,
      auth: 'jwt',
      scopes: ['create:externalProfile', 'all:externalProfile']
    },
    head: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:externalProfile', 'all:externalProfile']
    }
  },
  '/users/:userId/externalProfiles/:organizationId': {
    get: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:externalProfile', 'all:externalProfile']
    },
    head: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:externalProfile', 'all:externalProfile']
    },
    patch: {
      method: Controller.patch,
      auth: 'jwt',
      scopes: ['update:externalProfile', 'all:externalProfile']
    },
    delete: {
      method: Controller.remove,
      auth: 'jwt',
      access: [consts.UserRoles.admin],
      scopes: ['delete:externalProfile', 'all:externalProfile']
    }
  }
}

/**
 * the attributeGroup routes
 */

const Controller = require('./controller')
const consts = require('../../consts')
module.exports = {
  '/attributeGroups': {
    get: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:attributeGroup', 'all:attributeGroup']
    },
    post: {
      method: Controller.create,
      auth: 'jwt',
      scopes: ['create:attributeGroup', 'all:attributeGroup']
    },
    head: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:attributeGroup', 'all:attributeGroup']
    }
  },
  '/attributeGroups/:id': {
    get: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:attributeGroup', 'all:attributeGroup']
    },
    head: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:attributeGroup', 'all:attributeGroup']
    },
    patch: {
      method: Controller.patch,
      auth: 'jwt',
      scopes: ['update:attributeGroup', 'all:attributeGroup']
    },
    delete: {
      method: Controller.remove,
      auth: 'jwt',
      access: [consts.UserRoles.admin],
      scopes: ['delete:attributeGroup', 'all:attributeGroup']
    }
  }
}

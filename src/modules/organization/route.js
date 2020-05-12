/**
 * the organization routes
 */

const Controller = require('./controller')
const consts = require('../../consts')
module.exports = {
  '/organizations': {
    get: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:organization', 'all:organization']
    },
    post: {
      method: Controller.create,
      auth: 'jwt',
      scopes: ['create:organization', 'all:organization']
    },
    head: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:organization', 'all:organization']
    }
  },
  '/organizations/:id': {
    get: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:organization', 'all:organization']
    },
    head: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:organization', 'all:organization']
    },
    patch: {
      method: Controller.patch,
      auth: 'jwt',
      scopes: ['update:organization', 'all:organization']
    },
    delete: {
      method: Controller.remove,
      auth: 'jwt',
      access: [consts.UserRoles.admin],
      scopes: ['delete:organization', 'all:organization']
    }
  }
}

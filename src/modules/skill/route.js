/**
 * the skill routes
 */

const Controller = require('./controller')
const consts = require('../../consts')
module.exports = {
  '/skills': {
    get: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:skill', 'all:skill']
    },
    post: {
      method: Controller.create,
      auth: 'jwt',
      scopes: ['create:skill', 'all:skill']
    },
    head: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:skill', 'all:skill']
    }
  },
  '/skills/:id': {
    get: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:skill', 'all:skill']
    },
    head: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:skill', 'all:skill']
    },
    patch: {
      method: Controller.patch,
      auth: 'jwt',
      scopes: ['update:skill', 'all:skill']
    },
    delete: {
      method: Controller.remove,
      auth: 'jwt',
      access: [consts.UserRoles.admin],
      scopes: ['delete:skill', 'all:skill']
    }
  }
}

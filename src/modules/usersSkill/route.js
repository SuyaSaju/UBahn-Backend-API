/**
 * the users skill routes
 */

const Controller = require('./controller')
const consts = require('../../consts')
module.exports = {
  '/users/:userId/skills': {
    get: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:usersSkill', 'all:usersSkill']
    },
    post: {
      method: Controller.create,
      auth: 'jwt',
      scopes: ['create:usersSkill', 'all:usersSkill']
    },
    head: {
      method: Controller.search,
      auth: 'jwt',
      scopes: ['read:usersSkill', 'all:usersSkill']
    }
  },
  '/users/:userId/skills/:skillId': {
    get: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:usersSkill', 'all:usersSkill']
    },
    head: {
      method: Controller.get,
      auth: 'jwt',
      scopes: ['read:usersSkill', 'all:usersSkill']
    },
    patch: {
      method: Controller.patch,
      auth: 'jwt',
      scopes: ['update:usersSkill', 'all:usersSkill']
    },
    delete: {
      method: Controller.remove,
      auth: 'jwt',
      access: [consts.UserRoles.admin],
      scopes: ['delete:usersSkill', 'all:usersSkill']
    }
  }
}

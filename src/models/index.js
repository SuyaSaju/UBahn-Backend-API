/**
 * the model index
 */

const User = require('./User')
const Role = require('./Role')
const SkillsProvider = require('./SkillsProvider')
const Skill = require('./Skill')
const Organization = require('./Organization')
const UsersRole = require('./UsersRole')
const UsersSkill = require('./UsersSkill')
const logger = require('../common/logger')
const consts = require('../consts')

const DBHelper = require('./DBHelper')

module.exports = {
  User,
  Role,
  SkillsProvider,
  Organization,
  Skill,
  UsersRole,
  UsersSkill,
  consts,
  DBHelper
}
/**
 * create table
 */
module.exports.init = async () => {
  logger.info('connect to database, check/create tables ...')
  await DBHelper.createTable(User)
  await DBHelper.createTable(Role)
  await DBHelper.createTable(SkillsProvider)
  await DBHelper.createTable(Skill)
  await DBHelper.createTable(Organization)
  await DBHelper.createTable(UsersRole)
  await DBHelper.createTable(UsersSkill)
}

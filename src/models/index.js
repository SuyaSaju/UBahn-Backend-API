/**
 * the model index
 */

const User = require('./User')
const AchievementsProvider = require('./AchievementsProvider')
const Achievement = require('./Achievement')
const AttributeGroup = require('./AttributeGroup')
const Attribute = require('./Attribute')
const UserAttribute = require('./UserAttribute')
const ExternalProfile = require('./ExternalProfile')
const Role = require('./Role')
const SkillsProvider = require('./SkillsProvider')
const Skill = require('./Skill')
const Organization = require('./Organization')
const UsersRole = require('./UsersRole')
const UsersSkill = require('./UsersSkill')
const logger = require('../common/logger')
const consts = require('../consts')

const DBHelper = require('./DBHelper')

const tables = {
  User,
  AchievementsProvider,
  Achievement,
  AttributeGroup,
  Attribute,
  UserAttribute,
  ExternalProfile,
  Role,
  SkillsProvider,
  Skill,
  Organization,
  UsersRole,
  UsersSkill
}

module.exports = {
  ...tables,
  consts,
  DBHelper
}
/**
 * create table
 */
module.exports.init = async () => {
  logger.info('connect to database, check/create tables ...')
  for (const tableName in tables) {
    await DBHelper.createTable(tables[tableName])
  }
}

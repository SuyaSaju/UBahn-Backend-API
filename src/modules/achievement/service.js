/**
 * the achievement services
 */

const joi = require('@hapi/joi')
const models = require('../../models/index')
const helper = require('../../common/helper')
const methods = helper.getServiceMethods(
  models.Achievement,
  {
    userId: joi.string().required(),
    achievementsProviderId: joi.string().required(),
    uri: joi.string().required(),
    name: joi.string().required(),
    certifierId: joi.string().required(),
    certifiedDate: joi.date().format('iso').required()
  },
  {
    userId: joi.string().required(),
    achievementsProviderId: joi.string().required(),
    uri: joi.string().required(),
    name: joi.string().required(),
    certifierId: joi.string().required(),
    certifiedDate: joi.date().format('iso').required()
  },
  {
    achievementsproviderName: joi.string(),
    userId: joi.string().required(),
    achievementsProviderId: joi.string().required()
  },
  async query => {
    let dbQueries = [`userId = '${query.userId}'`]
    if (query.achievementsproviderName) {
      dbQueries = ['SELECT * FROM Achievement, AchievementsProvider', `Achievement.userId = '${query.userId}'`, `AchievementsProvider.name like '%${query.achievementsproviderName}%'`]
    } else if (query.achievementsProviderId) {
      dbQueries = [`userId = '${query.userId}'`, `achievementsProviderId = '${query.achievementsProviderId}'`]
    }
    return dbQueries
  }, [['userId', 'achievementsProviderId']])

module.exports = {
  ...methods
}

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
  { name: joi.string() },
  {
    achievementsproviderName: joi.string(),
    userId: joi.string().required()
  },
  async query => {
    let dbQueries = [`userId = '${query.userId}'`]
    if (query.achievementsproviderName) {
      dbQueries = ['SELECT * FROM Achievement, AchievementsProvider', `Achievement.userId = '${query.userId}'`, `AchievementsProvider.name like'%${query.achievementsproviderName}%'`]
    }
    return dbQueries
  })

module.exports = {
  ...methods
}

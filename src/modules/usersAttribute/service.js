/**
 * the achievement services
 */

const joi = require('@hapi/joi')
const models = require('../../models/index')
const helper = require('../../common/helper')
const methods = helper.getServiceMethods(
  models.UserAttribute,
  {
    userId: joi.string().required(),
    attributeId: joi.string().required(),
    value: joi.string().required()
  },
  {
    userId: joi.string().required(),
    attributeId: joi.string().required(),
    value: joi.string().required()
  },
  {
    attributeName: joi.string(),
    attributeGroupName: joi.string(),
    attributeGroupId: joi.string(),
    userId: joi.string().required()
  },
  async query => {
    let dbQueries = [`userId = '${query.userId}'`]
    if (query.attributeId) {
      dbQueries = [`userId = '${query.userId}'`, `attributeId = '${query.attributeId}'`]
    }
    // if (query.achievementsproviderName) {
    //   dbQueries = ['SELECT * FROM Achievement, AchievementsProvider', `Achievement.userId = '${query.userId}'`, `AchievementsProvider.name like '%${query.achievementsproviderName}%'`]
    // } else if (query.achievementsProviderId) {
    //   dbQueries = [`userId = '${query.userId}'`, `achievementsProviderId = '${query.achievementsProviderId}'`]
    // }
    return dbQueries
  }, [['userId', 'attributeId']])

module.exports = {
  ...methods
}

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
  { name: joi.string(), userId: joi.string().required() },
  async query => {
    console.log(`query: ${JSON.stringify(query)}`)
    const dbQueries = [`userId = '${query.userId}'`]
    if (query.name) {
      dbQueries.push(`name like '%${query.name}%'`)
    }
    return dbQueries
  })

module.exports = {
  ...methods
}

/**
 * the externalProfile services
 */

const joi = require('@hapi/joi')
const models = require('../../models/index')
const helper = require('../../common/helper')
const methods = helper.getServiceMethods(
  models.ExternalProfile,
  {
    userId: joi.string().required(),
    organizationId: joi.string().required(),
    uri: joi.string().required()
  },
  {
    userId: joi.string().required(),
    organizationId: joi.string().required(),
    uri: joi.string().required()
  },
  {
    userId: joi.string().required(),
    organizationName: joi.string()
  },
  async query => {
    const dbQueries = [`SELECT * FROM ${models.ExternalProfile.tableName}, ${models.Organization.tableName}`,
      `${models.ExternalProfile.tableName}.userId = '${query.userId}'`,
      `${models.ExternalProfile.tableName}.organizationId = ${models.Organization.tableName}.id`
    ]
    if (query.organizationId) {
      dbQueries.push(`${models.ExternalProfile.tableName}.organizationId = '${query.attributeId}'`)
    }
    if (query.organizationName) {
      dbQueries.push(`${models.Organization.tableName}.name like '%${query.organizationName}%'`)
    }
    return dbQueries
  }, [['userId', 'organizationId']], ['id'])

module.exports = {
  ...methods
}

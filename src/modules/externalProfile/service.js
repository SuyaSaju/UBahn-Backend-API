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
    const dbQueries = ['SELECT * FROM ExternalProfiles, Organization',
      `ExternalProfiles.userId = '${query.userId}'`,
      'ExternalProfiles.organizationId = Organization.id'
    ]
    if (query.organizationId) {
      dbQueries.push(`ExternalProfiles.organizationId = '${query.attributeId}'`)
    }
    if (query.organizationName) {
      dbQueries.push(`Organization.name like '%${query.organizationName}%'`)
    }
    return dbQueries
  }, [['userId', 'organizationId']])

module.exports = {
  ...methods
}

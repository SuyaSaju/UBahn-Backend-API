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
    // let dbQueries = [`userId = '${query.userId}'`]
    const dbQueries = ['SELECT * FROM UserAttributes, Attributes, AttributeGroups',
      `UserAttributes.userId = '${query.userId}'`,
      'UserAttributes.attributeId = Attributes.id',
      'Attributes.attributeGroupId = AttributeGroups.id'
    ]

    if (query.attributeId) {
      dbQueries.push(`UserAttributes.attributeId = '${query.attributeId}'`)
    }
    if (query.attributeName) {
      dbQueries.push(`Attributes.name like '%${query.attributeName}%'`)
    }
    if (query.attributeGroupName) {
      dbQueries.push(`AttributeGroups.name like '%${query.attributeGroupName}%'`)
    }
    if (query.attributeGroupId) {
      dbQueries.push(`AttributeGroups.id = '${query.attributeGroupId}'`)
    }
    return dbQueries
  }, [['userId', 'attributeId']])

module.exports = {
  ...methods
}

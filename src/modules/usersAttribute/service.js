/**
 * the userAttribute services
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
    const dbQueries = [`SELECT * FROM ${models.UserAttribute.tableName},
     ${models.Attribute.tableName}, ${models.AttributeGroup.tableName}`,
      `${models.UserAttribute.tableName}.userId = '${query.userId}'`,
      `${models.UserAttribute.tableName}.attributeId = ${models.Attribute.tableName}.id`,
      `${models.Attribute.tableName}.attributeGroupId = ${models.AttributeGroup.tableName}.id`
    ]

    if (query.attributeId) {
      dbQueries.push(`${models.UserAttribute.tableName}.attributeId = '${query.attributeId}'`)
    }
    if (query.attributeName) {
      dbQueries.push(`${models.Attribute.tableName}.name like '%${query.attributeName}%'`)
    }
    if (query.attributeGroupName) {
      dbQueries.push(`${models.AttributeGroup.tableName}.name like '%${query.attributeGroupName}%'`)
    }
    if (query.attributeGroupId) {
      dbQueries.push(`${models.AttributeGroup.tableName}.id = '${query.attributeGroupId}'`)
    }
    return dbQueries
  },
  [['userId', 'attributeId']],
  ['id'])

module.exports = {
  ...methods
}

/**
 * the attribute services
 */

const joi = require('@hapi/joi')
const models = require('../../models/index')
const helper = require('../../common/helper')
const methods = helper.getServiceMethods(
  models.Attribute,
  {
    name: joi.string().required(),
    attributeGroupId: joi.string().required()
  },
  {
    attributeGroupId: joi.string(),
    name: joi.string()
  },
  {
    name: joi.string(),
    attributeGroupId: joi.string()
  },
  async (query) => {
    const queries = []
    if (query.name) {
      queries.push(`name like '%${query.name}%'`)
    }
    // both params are optional queries, hence no if else!
    if (query.attributeGroupId) {
      queries.push(`attributeGroupId = '${query.attributeGroupId}'`)
    }
    return queries
  },
  [['name', 'attributeGroupId']])

module.exports = {
  ...methods
}

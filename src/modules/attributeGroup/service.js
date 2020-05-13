/**
 * the attributeGroup services
 */

const joi = require('@hapi/joi')
const models = require('../../models/index')
const helper = require('../../common/helper')
const methods = helper.getServiceMethods(
  models.AttributeGroup,
  {
    name: joi.string().required(),
    organizationId: joi.string().required()
  },
  {
    organizationId: joi.string(),
    name: joi.string()
  },
  {
    name: joi.string(),
    organizationId: joi.string()
  },
  async (query) => {
    const queries = []
    if (query.name) {
      queries.push(`name = '${query.name}'`)
    }
    // both params are optional queries, hence no if else!
    if (query.organizationId) {
      queries.push(`organizationId = '${query.organizationId}'`)
    }
    return queries
  }, [['name']])

module.exports = {
  ...methods
}

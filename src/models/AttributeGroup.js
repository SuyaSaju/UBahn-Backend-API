const { RecordObject } = require('./BaseObject')

/**
 * AttributeGroup model
 */
class AttributeGroup extends RecordObject {
  constructor () {
    super()
    this.name = null
    this.organizationId = null
  }
}

AttributeGroup.tableName = 'AttributeGroups'
module.exports = AttributeGroup

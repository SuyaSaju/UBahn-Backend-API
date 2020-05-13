const { RecordObject } = require('./BaseObject')

/**
 * Attribute model
 */
class Attribute extends RecordObject {
  constructor () {
    super()
    this.name = null
    this.attributeGroupId = null
  }
}

Attribute.tableName = 'Attributes'
module.exports = Attribute

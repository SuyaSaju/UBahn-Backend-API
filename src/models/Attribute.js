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
Attribute.additionalSql = [
  `CREATE INDEX ON ${Attribute.tableName} (name)`
]
module.exports = Attribute

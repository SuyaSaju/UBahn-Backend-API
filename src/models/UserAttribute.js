const { RecordObject } = require('./BaseObject')

/**
 * UserAttribute model
 */
class UserAttribute extends RecordObject {
  constructor () {
    super()
    this.userId = null
    this.attributeId = null
    this.value = null
  }
}

UserAttribute.tableName = 'UserAttributes'
module.exports = UserAttribute

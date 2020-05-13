const { RecordObject } = require('./BaseObject')

/**
 * Achievements model
 */
class Achievement extends RecordObject {
  constructor () {
    super()
    this.userId = null
    this.providerId = null
    this.name = null
    this.uri = null
    this.certifierId = null
    this.certifiedDate = null
  }
}

Achievement.tableName = 'Achievements'
module.exports = Achievement

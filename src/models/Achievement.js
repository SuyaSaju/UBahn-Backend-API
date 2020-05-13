const { RecordObject } = require('./BaseObject')

/**
 * Achievement model
 */
class Achievement extends RecordObject {
  constructor () {
    super()
    this.userId = null
    this.achievementsProviderId = null
    this.name = null
    this.uri = null
    this.certifierId = null
    this.certifiedDate = null
  }
}

Achievement.tableName = 'Achievement'
module.exports = Achievement

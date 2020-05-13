const { RecordObject } = require('./BaseObject')

/**
 * AchievementsProvider model
 */
class AchievementsProvider extends RecordObject {
  constructor () {
    super()
    this.name = null
  }
}

AchievementsProvider.tableName = 'AchievementsProvider'
module.exports = AchievementsProvider

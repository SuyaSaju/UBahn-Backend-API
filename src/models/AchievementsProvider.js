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
AchievementsProvider.additionalSql = [
  `CREATE INDEX ON ${AchievementsProvider.tableName} (name)`
]
module.exports = AchievementsProvider

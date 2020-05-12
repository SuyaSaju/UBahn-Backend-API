/**
 * the default config
 */

module.exports = {
  LOG_LEVEL: process.env.LOG_LEVEL || 'debug',
  PORT: process.env.PORT || 3001,
  AUTH_SECRET: process.env.AUTH_SECRET || 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJyb2xlcyI6WyJUb3Bjb2RlciBVc2VyIl0sImlzcyI6Imh0dHBzOi8vYXBpLnRvcGNvZGVyLmNvbSIsImhhbmRsZSI6InRjLXVzZXIiLCJleHAiOjE2ODU1NzE0NjAsInVzZXJJZCI6IjIzMTY2NzY2IiwiaWF0IjoxNTg1NTcwODYwLCJlbWFpbCI6InRjLXVzZXJAZ21haWwuY29tIiwianRpIjoiMGYxZWYxZDMtMmIzMy00OTAwLWJiNDMtNDhmMjI4NWY5NjI3In0.eBhXqSBe8zMRg2nBeGeZDgKiJdAYs0zOMzGfJCjWfcs',
  VALID_ISSUERS: process.env.VALID_ISSUERS ? process.env.VALID_ISSUERS.replace(/\\"/g, '')
    : '["https://topcoder-dev.auth0.com/", "https://api.topcoder.com"]',
  API_VERSION: 'api/1.0',

  AWS_KEY: process.env.AWS_KEY || 'AKIAIZBWXC57GT45H7BA',
  AWS_SECRET: process.env.AWS_SECRET || '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',
  AWS_REGION: process.env.AWS_REGION || 'us-east-2',
  DATABASE: process.env.DATABASE || 'ubahn-db'
}

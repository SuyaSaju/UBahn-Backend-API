## Tasks
### API Endpoints
- [ ] ExternalProfiles
- [ ] Achievements
    - [ ] API Implementation - In progress
    - [ ] Postman collection
- [ ] AchievementsProvider
    - [X] API Implementation
    - [X] Postman collection
- [ ] UserAttributes
- [ ] Attributes
- [ ] AttributeGroups

### ERD
- [ ] validations based on the ERD diagram

### OTHERS
- [ ] use the submission api as reference. Note that this uses yield, 
but you need to use async await pattern
    - https://github.com/topcoder-platform/submissions-api/blob/develop/src/routes/SubmissionRoutes.js
- [ ] Docker
- [ ] Postman collection

### Before submission
- [ ] Remove secret keys from default.js
- [ ] Remove Helper.md folder
- [ ] Deployment guide and validation document
- [ ] Update the existing README file with any additional info, as needed, for this contest
- [ ] Run lint
- [ ] Add code comments to improve score

## Questions
- [ ] If there are no results, what status code HEAD API endpoints should return? 
HTTP STATUS CODE 200 would be fine?

## Helper Docs

### Swagger spec ref:
[https://app.swaggerhub.com/apis/ponsuyambu/u-bahn_api/1.0.0#/]()

### Sample Ledger DB for testing
[https://us-east-2.console.aws.amazon.com/qldb/home?region=us-east-2#query-editor:/ledger/ubahn-db]()

### Creating a table with mock data
* Under [data](scripts/db/data) folder you can find mock data
* To create a new table, 
    - create a model under [models](src/models), 
    - create a mock json under [data](scripts/db/data) folder, 
    - update [index.js](src/models/index.js) 
    - and run the genData.js using ```node scripts/db/genData.js```



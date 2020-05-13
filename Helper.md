## Tasks
### API Endpoints
- [ ] ExternalProfiles
- [ ] Achievements
    - [X] API Implementation
    - [X] Postman collection
- [ ] AchievementsProvider
    - [X] API Implementation
    - [X] Postman collection
- [ ] UserAttributes
    - [ ] API Implementation - In progress
    - [ ] Postman collection
- [ ] Attributes
    - [X] API Implementation
    - [X] Postman collection
- [ ] AttributeGroups
    - [X] API Implementation
    - [X] Postman collection

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
- [ ] Review service.js
- [ ] Do optimization in [index.js](src/models/index.js) and mention in Readme

## Questions
- [ ] If there are no results, what status code HEAD API endpoints should return? 
HTTP STATUS CODE 200 would be fine?
- [X] For Http Body, all the fields are required or all are optional?
- For attributes, In swagger it is referred as 'attributeId' in path params, but in DB we use
as 'id', can we use the 'id' as path param(attributes/:id). or we should strictly use as 'attributeId'((attributes/:attributeId))
as mentioned in swagger
- [ ] Considering achievementsProviderId and userId is unique, 
{{HOST}}/users/{userId}/achievements/:achievementsProviderId will return only one result. But the swagger doc

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
### Creating a new service
- Copy the existing one of the modules under [modules](src/modules) folder
 and rename it to your desired module.
- Update line number 9 at service.js to your newly created module.
- 
- Update the existing header comments



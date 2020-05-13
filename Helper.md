## Tasks
### API Endpoints
- [ ] ExternalProfiles
- [ ] Achievements
- [ ] AchievementsProvider
    - [ ] API Implementation - In progress
    - [ ] Postman collection
- [ ] UserAttributes
- [ ] Attributes
- [ ] AttributeGroups

### ERD
- [ ] validations based on the ERD diagram

### OTHERS
- [ ] use the submission api as reference. Note that this uses yield, but you need to use async await pattern
- [ ] Docker
- [ ] Postman collection

### Before submission
- [ ] Remove secret keys from default.js
- [ ] Remove Helper.md folder
- [ ] Deployment guide and validation document
- [ ] Update the existing README file with any additional info, as needed, for this contest
- [ ] Run lint

## Helper Docs

### Swagger spec ref:
https://app.swaggerhub.com/apis/ponsuyambu/u-bahn_api/1.0.0#/

### Sample Ledger DB for testing
[https://us-east-2.console.aws.amazon.com/qldb/home?region=us-east-2#query-editor:/ledger/ubahn-db]()

### TODO
#### Before submission
1. Remove secret keys from default.js
2. Remove Helper.md folder
3. 

### Creating a table with mock data
* Under [scripts](scripts) folder you can find mock data
* To create a new table, 
    - create a mock json under [data](scripts/db/data) folder, 
    - create a model under [models](src/models), 
    - update [index.js](src/models/index.js) 
    - and run the genData.js using ```node scripts/db/genData.js```



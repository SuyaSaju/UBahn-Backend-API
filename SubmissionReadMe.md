## Major Requirements

### API Endpoints
- [X] ExternalProfiles
    - [X] API Implementation
    - [X] Postman collection
- [X] Achievements
    - [X] API Implementation
    - [X] Postman collection
- [X] AchievementsProvider
    - [X] API Implementation
    - [X] Postman collection
- [X] UserAttributes
    - [X] API Implementation
    - [X] Postman collection
- [X] Attributes
    - [X] API Implementation
    - [X] Postman collection
- [X] AttributeGroups
    - [X] API Implementation
    - [X] Postman collection

### ERD
- [X] validations based on the ERD diagram

## Minor Requirements
- [X] Update the existing helper scripts that populate the database with mock values

## Nice to have
- [X] Docker
- [X] Postman collection

### Improvements Done

As part of this challenge below improvements also made to fix the existing issues or 
to improve the code quality.

- [X] As per the requirement, for certain end points(like Achievements, UserAttribute etc)
the id need not to be send to the client. For that we created a new generic
`excludeFieldsFromOutput` field in service so that new services can be used easily. 
- [X] Improved the table creation code in [index](src/models/index.js)as it had duplicate logic,
now it is easier to config the table creation process
- [X] Instead of referring the hardcoded table names, those are used from existing models
- [X] Added `Dev Guide` section in Readme, so that next services can be created 
easily as the code is now more generic.
- [X] Created the index on table where it is needed


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

### Improvements

As part of this challenge below improvements also made to fix the existing issues or 
to improve the code quality

- [X] As per the requirement, for certain end points(like Achievements, UserAttribute etc)
the id need not to be send to the client. For that we created a `excludeFieldsFromOutput` in
service
- [X] Improved the table creation code in [index](src/models/index.js)as it had duplicate logic

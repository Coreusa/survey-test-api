## Static Example API
This is an example API that serves randomized data for a fictional survey using Azure Functions. This project is used as a springboard for test applications in various scenarios.

## Endpoints
The following endpoints are offered as means to retrieve data needed to perform tests. All are GET and results are always JSON.

### Get Survey
Retrieves a fictional survey identified by a SURVEY_ID, a GUID the user can make up (however it must still be a GUID)
GET /surveys/{SURVEY_ID}

### Get Survey Response
Retrieves a fictional response from a fictional survey identified by <SURVEY_ID> and <RESPONSE_ID>. Both as GUIDs which the user can make up (however they must still be a GUID)
GET /surveys/{SURVEY_ID}/responses/{RESPONSE_ID}

### Get Survey Scores
Retrieves fictional scores from a fictional survey identified by <SURVEY_ID>, a GUIDs which the user can make up (however it must still be a GUID)
GET /surveys/{SURVEY_ID}/scores

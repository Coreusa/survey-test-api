## Survey Test API
This is an example API that serves randomized survery data using Azure Functions. This project is used as a springboard for test applications in various scenarios.

## Endpoints
The following endpoints are offered as means to retrieve data needed to perform tests. All are GET and results are always JSON.

### Get Survey
Retrieves a fictional survey identified by a SURVEY_KEY, a GUID the user can make up (however it must still be a GUID)

`GET /surveys/{SURVEY_KEY}`

### Get Survey Response
Retrieves a fictional response from a fictional survey identified by <SURVEY_KEY> and <RESPONSE_KEY>. Both as GUIDs which the user can make up (however they must still be a GUID)

`GET /surveys/{SURVEY_KEY}/responses/{RESPONSE_KEY}`

### Get Survey Scores
Retrieves fictional scores from a fictional survey identified by <SURVEY_KEY>, a GUIDs which the user can make up (however it must still be a GUID)

`GET /surveys/{SURVEY_KEY}/scores`

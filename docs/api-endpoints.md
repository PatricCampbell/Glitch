# API Endpoints

### HTML API

##### Root
* GET / - root page with hooks to React

### JSON API
##### Users
* POST /api/users

##### Session
* POST /api/session
* DELETE /api/session

##### Channels
* GET /api/channels/:channelID
* Accepts channel type, channel or direct message
* POST /api/channels
* PATCH /api/channels/:channelId
* DELETE /api/channels/:channelId

##### Messages
* GET /api/channels/:channelID/messages
* POST /api/channels/:channelID/messages/:messageID
* DELETE /api/channels/:channelID/messages/:messageID
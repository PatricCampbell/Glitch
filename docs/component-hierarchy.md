# Component Hierarchy

### SplashPage

### AuthFormContainer
* SignUpForm
* Login Form

### NewChannelContainer
* NewChannelForm

### EditChannelContainer
* EditChannelForm

### UserInfoContainer
* UserInfo

### Channels

### ChannelListContainer
* ChannelList
* ChannelListItem

### DMListContainer
* DMList
* DMListItem

### DirectMessageContainer
* DirectMessageList
* DirectMessageListItem

### MainChannelContainer
* MainChannelTitleArea
### ChannelMessagesContainer
* ChannelMessageList
* ChannelMessageListItem
* NewMessageForm

# Routes

Path | Component 
:---: |:---:
"/" | SplashPage
"/signup" | SignUpForm
"/login" | LoginForm
"/channels/:channelID" | Channels
"/channels/:channelID/new" | NewChannelContainer
"/channels/:channelId/edit" | EditChannelContainer
"/dms/new" | DirectMEssageContainer
"/user/:userID" | UserInfoContainer
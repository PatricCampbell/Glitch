# Glitch

[Glitch](https://glitch-aa.herokuapp.com/#/)

Glitch is a real time chatting web application built using PostgresSQL as its database, Ruby on Rails as the backend, and React with Redux on the frontend. Glitch is inspired by Slack and allows users to chat in public channels as well as two person and multi-person direct messages.

# Features And Implementation

## Real Time Messaging
When a message is sent to a channel or direct message, any other user currently viewing that same channel or direct message will have the new message rendered in real time. This is accomplished using a service called Pusher. Pusher uses websockets and utilizes a publish and subscription model. When a message is sent to the backend and saved to the database, an event is published. This event contains a channel and a message. An example of this is in the messages controller:

```ruby
  def create
    @message = Message.new(message_params)
    
    if @message.save
      Pusher.trigger('channel_' + @message.channel_id.to_s, 'new_message', {})
      render :show
    else
      render json: @message.errors.full_messages, status: 401
    end
  end
```

On a new message creation, an event is published when the message is saved successfully. It contains the channel the message corresponds to and the 'new_message' event. On the frontend, users are subscribed to this channel based on the URL they are viewing and are waiting to receive events.

```javascript
  componentDidMount() {
    const channel = this.pusher.subscribe('channel_' + channelId);

    channel.bind('new_message', data => {
      this.props.getAllMessages(channelId)
        .then(() => this.messagesToBottom());
    });
  }
```

An example is shown here in the component that handles displaying messages. When the component mounts, it takes the channel  id and subscribes to the corresponding event using a websocket. It then waits for 'new_message' type events. When it receives one, it will fetch the messages for the channel which triggers a rerender.

## Multi-User Direct Messages
Direct Messages are special types of channels. Since they are private, they need to keep track of their users unlike the public channels. Users can have multiple DMs, and DMs can have multiple users so a join table is needed in the database. In order to facilitate the two types of channels, two controllers were created that use the Channels Model. This way, the front end only needs to know which api to ask information from and the backend handles the rest.

The main issue with this approach is the controller needs to make sure it only sends messages that the user is allowed to view. It receives a user from the front end to use in its search. The code that then finds the messages is:

```ruby
  def index
    user = User.find(params[:user_id])
   
    @direct_messages = Channel.where(channel_type: true).joins(:users).where("users.id = #{user.id}")
  end
```

While this looks simple, the ActiveRecord query took a bit to come up with. It first has to find channels that are of the direct message type, indicated by the channel_type being true. It then has to join :users which is a through association that utilizes the join table talked about earlier. Lastly, it only will select these direct messages that contain the user given by the front end. This results in the list of direct messages the particular user is a part of being sent to the frontend to be rendered.

The other issue that came up is on direct message creation. The front end sends a list of user IDs of the users to be added to a multi-user DM. This array of IDs then needs to be turned into a channel name. There is one pitfall in this, if one user sends a DM to another, the second person should not be able to create a brand new DM with the first person. Otherwise, there will be two channels displayed to each user even though there should only be one.

```ruby
  def create
    userIds = direct_message_params[:users]
    users = userIds.map do |id|
      User.find(id.to_i)
    end

    @direct_message = Channel.new()
    @direct_message.name = users.map { |user| user.username }.sort.join(', ')
```
This was solved pretty simply, the list of users is sorted alphabetically and the channel name is made using the sorted list. Since they will always be sorted the same, the unique validator on both the model and database layer will not allow mutliple DMs of the same users to be created.

# Future Features

## Message Editing
Users can delete messages they send but are unable to edit them. I will add an editing feature that will turn their message display into a textfield that the user can then edit. This will not trigger a noitification to other users in those channels.

## Message Search
Users often would like to find old or specific messages but they could be a part of many different channels and direct messages. I will create a search feature that will search through all of a user's channels and find their target. This will be displayed in a side panel.

## Message Notifications
Currently, if a user is looking at a channel or direct message they will see any new messages in that single channel. However,there is no indication of new messages in channels they are not looking at. I will create notifications that will indicate on the message sidebar when there are new messages in channels or direct messages that the user is currently not viewing.

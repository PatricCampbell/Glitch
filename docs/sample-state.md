{
  entities: {
    users: {
      1: {
        id: 1,
        username: 'Patric',
        avatar_image: 'patric.jpeg'
        message_ids: [1, 3],
        channel_ids: [1, 2]
      },
      7: {
        id: 7,
        username: 'TSwift',
        avatar_image: 'swift.bmp'
        message_ids: [2],
        channel_ids: [1]
      }
    },
    directMessages: {
      id: 1,
      user_ids: [7],
      body: 'I just love your music!'
        },
    chatMessages: {
      1: {
        id : 1,
        body: "TSwift is the bestest!",
        user_id: 1
      },
      2: {
        id : 2,
        body: "Thank you so much, I'll send you free tickets to my next show",
        user_id: 7
      },
      3: {
        id : 3,
        body: "Woooo",
        user_id: 1
	}
    }
  },
  ui: {
    currentChannel: 'PopMusic,
  },
  errors: {
    channel: ['That channel does not exist'],
  },
  session: {
    id: 1,
    username: 'Patric',
    avatar_image: 'patric.jpg'
  }
}
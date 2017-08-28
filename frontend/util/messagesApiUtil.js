export const fetchAllMessages = (channelId) => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/${channelId}/messages`,
  });
};

export const sendNewMessage = (message, channelId) => {
  return $.ajax({
    method: 'POST',
    url: `/api/channels/${channelId}/messages`,
    data: {message},
  });
};

export const deleteMessage = (message, channelId) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/channels/${channelId}/messages/${message.id}`,
  });
};

export const fetchAllMessages = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/messages',
  });
};

export const sendNewMessage = (message) => {
  return $.ajax({
    method: 'POST',
    url: '/api/messages',
    data: {message},
  });
};

export const deleteMessage = (message) => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/messages/${message.id}`,
  });
};

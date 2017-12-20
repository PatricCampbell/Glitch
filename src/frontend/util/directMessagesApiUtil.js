export const fetchAllDirectMessages = (user) => {
  return $.ajax({
    method: 'GET',
    url: `/api/direct_messages/`,
    data: {user_id: user.id},
  });
};

export const createDirectMessage = userList => {
  return $.ajax({
    method: 'POST',
    url: `/api/direct_messages/`,
    data: {
      direct_message: { users: userList }
    },
  });
};

// export const editChannel = channel => {
//   return $.ajax({
//     method: 'PATCH',
//     url: `/api/channels/${channel.id}`,
//     data: {channel},
//   });
// };

// export const deleteChannel = channel => {
//   return $.ajax({
//     method: 'DELETE',
//     url: `/api/channels/${channel.id}`,
//   });
// };

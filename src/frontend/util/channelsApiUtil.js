export const fetchAllChannels = () => {
  return $.ajax({
    method: 'GET',
    url: `/api/channels/`,
  });
};

export const createChannel = channel => {
  return $.ajax({
    method: 'POST',
    url: `/api/channels/`,
    data: {channel},
  });
};

export const editChannel = channel => {
  return $.ajax({
    method: 'PATCH',
    url: `/api/channels/${channel.id}`,
    data: {channel},
  });
};

export const deleteChannel = channel => {
  return $.ajax({
    method: 'DELETE',
    url: `/api/channels/${channel.id}`,
  });
};

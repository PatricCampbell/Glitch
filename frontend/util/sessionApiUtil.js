export const signup = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/users',
    contentType: false,
    processData: false,
    data: user,
  });
};

export const login = (user) => {
  return $.ajax({
    method: 'POST',
    url: '/api/sessions',
    contentType: false,
    processData: false,
    data: user,
  });
};

export const logout = () => {
  return $.ajax({
    method: 'DELETE',
    url: '/api/sessions',
  });
};

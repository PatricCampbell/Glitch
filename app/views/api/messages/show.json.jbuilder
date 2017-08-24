json.extract! @message, :id, :body
json.author do
  json.username @message.author.username
  json.avatar_url @message.author.avatar_url
end

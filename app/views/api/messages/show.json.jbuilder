json.extract! @message, :id, :body
json.author do
  json.username @message.author.username
  json.avatar_url asset_path(@message.author.avatar.url)
end
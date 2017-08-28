json.array! @messages do |message|
  json.body message.body
  json.id message.id
  json.sentTime message.created_at
  json.author do
    json.username message.author.username
    json.avatar_url asset_path(message.author.avatar.url)
  end
end

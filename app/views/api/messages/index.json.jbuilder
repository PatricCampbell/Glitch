json.array! @messages do |message|
  json.body message.body
  json.id message.id
  json.author do
    json.username message.author.username
    json.avatar_url message.author.avatar_url
  end
end

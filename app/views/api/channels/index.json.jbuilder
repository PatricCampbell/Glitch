json.array! @channels do |channel|
  json.id channel.id
  json.name channel.name
  json.description channel.description
  json.creator_id channel.creator_id
end
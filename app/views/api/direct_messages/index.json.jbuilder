json.array! @direct_messages do |direct_message|
  json.id direct_message.id
  json.name direct_message.name
  json.description direct_message.description
  json.creator_id direct_message.creator_id
end
json.array! @users do |user|
  json.id user.id
  json.username user.username
  json.avatar asset_path(user.avatar.url)
end
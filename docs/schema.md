### Users
column name | data type | details
--- | --- | ---
id | integer| not null, primary key
username | string | not null, unique
password_digest | string| not null
session_token | string | not null, unique
avatar_url | string | not null

### Channels
column name| data type| details
--- | --- | ---
id | integer | not null, primary key
name | string | not null, unique
description | string |
creator_id | interger | not null, foreign key to users
channel_type | string | not null, default = channel

### Messages
column name | data type | details
--- | --- | ---
id | integer | not null, primary key
body | string | not null
author_id | id | foreign key to users
channel_id | id | foreign key to channels

### ChannelUsers
column name| data type| details
id | integer | not null, primary key
--- | --- | ---
channel_id | integer | not null, foreign key to channels
user_id | integer | not null, foreign key to users

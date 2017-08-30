# == Schema Information
#
# Table name: channel_users
#
#  id         :integer          not null, primary key
#  channel_id :integer          not null
#  user_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class ChannelUser < ActiveRecord::Base
  validates :user_id, :channel_id, presence: true

  belongs_to :user

  belongs_to :channel
end

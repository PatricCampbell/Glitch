# == Schema Information
#
# Table name: messages
#
#  id         :integer          not null, primary key
#  body       :text             not null
#  author_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  channel_id :integer          not null
#

class Message < ActiveRecord::Base
  validates :author_id, :channel_id, :body, presence: true

  belongs_to :author,
    foreign_key: :author_id,
    class_name: :User

  belongs_to :channel
end

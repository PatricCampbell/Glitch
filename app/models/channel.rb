# == Schema Information
#
# Table name: channels
#
#  id          :integer          not null, primary key
#  name        :string           not null
#  description :text
#  creator_id  :integer
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Channel < ActiveRecord::Base
  validates :name, :creator_id, presence: true
  validates :name, uniqueness: true

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User
  
  has_many :messages

  has_many :users,
    through: :messages,
    source: :author

end

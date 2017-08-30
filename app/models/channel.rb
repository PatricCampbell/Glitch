# == Schema Information
#
# Table name: channels
#
#  id           :integer          not null, primary key
#  name         :string           not null
#  description  :text
#  creator_id   :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#  channel_type :boolean          default(FALSE), not null
#

class Channel < ActiveRecord::Base
  validates :name, :creator_id, :channel_type, presence: true
  validates :name, uniqueness: true
  after_initialize :apply_default

  belongs_to :creator,
    foreign_key: :creator_id,
    class_name: :User
  
  has_many :messages

  has_many :users,
    through: :messages,
    source: :author

  def apply_default
    @channel_type ||= false
  end

end

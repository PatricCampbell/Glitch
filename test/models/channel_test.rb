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

require 'test_helper'

class ChannelTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

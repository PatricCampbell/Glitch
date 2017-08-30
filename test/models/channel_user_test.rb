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

require 'test_helper'

class ChannelUserTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end

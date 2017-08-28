class AddNotNullToChannelNameAndMessageChannel < ActiveRecord::Migration
  def change
    change_column_null :messages, :channel_id, false
    change_column_null :channels, :name, false
  end
end

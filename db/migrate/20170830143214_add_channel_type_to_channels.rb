class AddChannelTypeToChannels < ActiveRecord::Migration
  def change
    add_column :channels, :channel_type, :boolean, null: false, default: false
  end
end

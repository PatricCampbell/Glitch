class AddChannelToMessages < ActiveRecord::Migration
  def change
    add_column :messages, :channel_id, :integer, presence: true
    add_index :messages, :channel_id
  end
end

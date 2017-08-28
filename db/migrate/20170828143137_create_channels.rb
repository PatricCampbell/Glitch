class CreateChannels < ActiveRecord::Migration
  def change
    create_table :channels do |t|
      t.string :name, presence: true
      t.text :description
      t.integer :creator_id, presence: true

      t.timestamps null: false
    end
    add_index :channels, :creator_id
    add_index :channels, :name, unique: true
  end
end

class CreateMessages < ActiveRecord::Migration
  def change
    create_table :messages do |t|
      t.text :body, null: false
      t.integer :author_id, null: false

      t.timestamps null: false
    end
    add_index :messages, :author_id
  end
end

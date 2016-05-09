class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.integer :item_id
      t.integer :transaction_id
      t.string :category
      t.text :description
      t.string :risk_level
      t.integer :amount
      t.datetime :pawn_date
      t.datetime :due_date
      t.string :status
      t.text :history

      t.timestamps
    end
  end
end

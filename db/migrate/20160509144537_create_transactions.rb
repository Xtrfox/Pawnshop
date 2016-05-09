class CreateTransactions < ActiveRecord::Migration
  def change
    create_table :transactions do |t|
      t.integer :transaction_id
      t.integer :customer_id
      t.integer :service_charge
      t.integer :total
      t.integer :paid_amount

      t.timestamps
    end
  end
end

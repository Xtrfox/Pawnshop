class RemoveTransactionIdfromTransactions < ActiveRecord::Migration
  def change
    remove_column :transactions, :transaction_id
  end
end

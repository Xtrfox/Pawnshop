class RemoveIdsAddCustomerIdToItem < ActiveRecord::Migration
  def change
    add_column :items, :customer_id, :integer
    remove_column :items, :item_id
    remove_column :customers, :customer_id
  end
end

class DeleteServiceChargeFromTransaction < ActiveRecord::Migration
  def change
    remove_column :transactions, :service_charge
    add_column :customers, :service_charge, :integer
  end
end

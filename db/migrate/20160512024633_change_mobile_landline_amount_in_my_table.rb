class ChangeMobileLandlineAmountInMyTable < ActiveRecord::Migration
  def change
    change_column :customers, :mobile, :bigint
    change_column :customers, :landline, :bigint
  end
end

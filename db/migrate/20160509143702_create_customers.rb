class CreateCustomers < ActiveRecord::Migration
  def change
    create_table :customers do |t|
      t.string :first_name
      t.string :last_name
      t.string :middle_initial
      t.string :street_address_1
      t.string :street_address_2
      t.string :city
      t.integer :postal_code
      t.integer :mobile
      t.integer :landline
      t.datetime :bday
      t.integer :customer_id

      t.timestamps
    end
  end
end

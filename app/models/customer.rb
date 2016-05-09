class Customer < ActiveRecord::Base
  has_many :items
  has_many :transactions
end

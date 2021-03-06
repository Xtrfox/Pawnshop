# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20160517123342) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "customers", force: true do |t|
    t.string   "first_name"
    t.string   "last_name"
    t.string   "middle_initial"
    t.string   "street_address_1"
    t.string   "street_address_2"
    t.string   "city"
    t.integer  "postal_code"
    t.string   "mobile"
    t.integer  "landline",         limit: 8
    t.datetime "bday"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "service_charge"
  end

  create_table "items", force: true do |t|
    t.integer  "transaction_id"
    t.string   "category"
    t.text     "description"
    t.string   "risk_level"
    t.integer  "amount"
    t.datetime "pawn_date"
    t.datetime "due_date"
    t.string   "status"
    t.text     "history"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "customer_id"
  end

  create_table "transactions", force: true do |t|
    t.integer  "customer_id"
    t.integer  "total"
    t.integer  "paid_amount"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end

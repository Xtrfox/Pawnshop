#draft setup of models

create_table "customer", force: true do |t|
    t.integer "customer_id"
    t.string "last_name"
    t.string "first_name"
    t.string "middle_initial"
    t.string "street_address_1"
    t.string "street_address_2"
    t.string  "city"
    t.string  "postal_code"
    t.string "mobile"
    t.string "landline"
    t.integer  "dob_month"
    t.integer  "dob_day"
    t.integer  "dob_year"

  create_table "item", force: true do |t|
    t.integer "item_id"
    t.integer "transaction_id"
    t.string "category"
    t.string "description"
    t.string "risk_level"
    t.string "amount"
    t.integer "pawn_date" #pawndate
    t.integer "due_date" #duedate
    t.string "status"
    t.history "date" #date

  create_table "transaction", force: true do |t|
    t.integer "transaction_id"
    t.integer "customer_id"
    t.integer "item_id"
    t.integer "quantity"
    t.integer "loan_amount"
    t.integer "interest"
    t.integer "service_charge"
    t.integer "total"
    t.integer "paid_amount"

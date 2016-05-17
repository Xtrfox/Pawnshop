class CustomersController < ApplicationController
  def create
    customer = Customer.create(
                  first_name: params[:first_name],
                  last_name: params[:last_name],
                  middle_initial: params[:middle_initial],
                  street_address_1: params[:street_address_1],
                  street_address_2: params[:street_address_2],
                  city: params[:city],
                  postal_code: params[:postal_code],
                  mobile: params[:mobile],
                  landline: params[:landline].to_i,
                  bday: params[:bday]
                  )



    params[:items].each do |item|
      Item.create(
        amount: item['amount'].to_i,
        category: item['category'],
        description: item['description'],
        pawn_date: item['pawnDate'],
        due_date: item['dueDate'],
        risk_level: item['riskLevel'],
        status: 'Active',
        history: item['dueDate'].to_s,
        customer_id: customer.id
        )

    end

    render json: {
      status: 'success'
    }
  end

  def all_items
    items = Item.all

    render json: items
  end

  def post_items
    items = []
    params[:item_ids].each do |id|
      items << Item.find(id)
    end
    customer = Customer.find(params[:customer_id])
    response = {
      :customer => customer,
      :item => items
    }

    render json: response
  end



  def get_customer
    customer = Customer.find(params[:customer_id])
    items = customer.items
    today=Date.today

    items.each do |item|
      if item['due_date'].to_date >= today
        item.status = 'Active'
      else
        item.status = 'Expired'
      end
      item.save!
    end

    response = {
      :customer => customer,
      :item => items
    }
    render json: response
  end

  def all_customers
    customers = Customer.all

    today=Date.today
    active = false

    all_customers = []

    customers.each do |customer|
      customer.items.each do |item|
        if item['due_date'].to_date >= today
          active = true
        end
      end
      customer_hash = {
        :customer => customer,
        :items => customer.items,
        :active => active
      }
      all_customers << customer_hash
    end

    render json: all_customers

  end

  def settle
    transaction = Transaction.create(
                    customer_id: params[:customer_id],
                    service_charge: params[:service_charge],
                    total: params[:total],
                    paid_amount: params[:paid_amount]
                  )
    params[:item].each do |ids|
      item = Item.find(ids)
      item.transaction_id = transaction.id
      item.status = "Paid"
      item.save!
    end

    customer = Customer.find(params[:customer_id])
    items = Transaction.items

    transact = {
      :customer => customer,
      :paid_items => items
    }

    render json: transact


  end
end

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
                  mobile: params[:mobile].to_i,
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

  def get_customer
    customer = Customer.find(params[:customer_id])

    render json: customer
  end

  def get_item #tried getting item of customer
    item_id = Customer.find(params[:customer_id]).item.id
    item = Item.find(item_id)

    render json: item
  end

  def all_customers

    Rails.logger.info('hello')
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
end

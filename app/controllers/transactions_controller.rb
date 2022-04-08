class TransactionsController < ApplicationController
  skip_before_action :verify_authenticity_token # to stop ActionController::InvalidAuthenticityToken

  include ExchangeRate


  def index
    transactions = Transaction.all
    render json: transactions
  end

  def show
    transaction = Transaction.find(params[:id])
    render json: transaction
  end

  def create
    transaction = Transaction.new(transaction_params)

    transaction.calculate_output_amount(transaction)
    
    if transaction.save
      render json: transaction, status: :created # 201 Successfully create entry
    else
      render :new, status: :unprocessable_entity
    end
  end

  def state
    transaction = Transaction.find(params[:id])

    if transaction.update(state: "paid")
      render json: transaction, status: :created
    else 
      render :new, status: :unprocessable_entity
    end


  end

  private

  def transaction_params
    params.require(:transaction).permit(:customer_id, :input_currency, :input_amount, :output_currency, :output_amount)
  end

end

# state field 

# column on transaction 

# default of created
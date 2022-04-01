class TransactionsController < ApplicationController
  skip_before_action :verify_authenticity_token

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
    
    if transaction.save
      render json: transaction
    else
      render :new, status: :unprocessable_entity
    end
  end

  private

  def transaction_params
    params.require(:transaction).permit(:title, :body)
  end

end

# Take JSON from params. 

# Put it in the database. 

# Cors working

# Fetching a specific transaction information is working. 

# Create transaction still needs to work. 

# 
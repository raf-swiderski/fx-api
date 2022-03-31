class TransactionsController < ApplicationController
  def index
    transactions = Transaction.all
    render json: transactions
  end
  def show
    transaction = Transaction.find(params[:id])
    render json: transaction
  end
end

# Take JSON from params. 

# Put it in the database. 

# First step is to send json back from the database. 
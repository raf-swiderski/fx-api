class AddStateToTransactions < ActiveRecord::Migration[6.1]
  def change
    add_column :transactions, :state, :string, :default => "created"
  end
end

class CreateTransactions < ActiveRecord::Migration[6.1]
  def change
    create_table :transactions do |t|
      
      t.string :customer_id

      t.string :input_currency
      t.integer :input_amount

      t.string :output_currency
      t.integer :output_amount

      t.timestamps
    end
  end
end

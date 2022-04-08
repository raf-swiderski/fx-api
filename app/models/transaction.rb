class Transaction < ApplicationRecord

    include ExchangeRate

    def calculate_output_amount
        exchange_rate = get_exchange_rate(self) # see ExchangeRate module 
        self.output_amount = self.input_amount * exchange_rate
    end

end

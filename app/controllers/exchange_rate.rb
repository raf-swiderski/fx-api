module ExchangeRate

    require 'net/http'

    def get_exchange_rate(transaction)
        
        # The free version of this API is from EUR only.
        url = URI.parse('http://api.exchangeratesapi.io/v1/latest?access_key=eb171357c9c81c54fdd17c1841258a96')
        req = Net::HTTP::Get.new(url.to_s)
        res = Net::HTTP.start(url.host, url.port) {|http|
        http.request(req)}

        response = JSON.parse(res.body)
        currency = transaction.output_currency
    
        return response['rates'][currency]
    end

end
Rails.application.routes.draw do

  get "/transactions", to: "transactions#index"
  get "/transactions/:id", to: "transactions#show"
  post "/transactions/paid/:id", to: "transactions#state"
  post "/transactions", to: "transactions#create"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

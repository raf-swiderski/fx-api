Rails.application.routes.draw do

  get "/transactions", to: "transactions#index"
  get "/transactions/:id", to: "transactions#show"
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

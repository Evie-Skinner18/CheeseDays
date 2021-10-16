Rails.application.routes.draw do
  resources :beers, only: [:index, :show, :create, :update, :destroy]
  resources :cheese_shops
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
end

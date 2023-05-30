Rails.application.routes.draw do
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  devise_for :users
  resources :passwords 

  # Defines the root path route ("/")
  root "passwords#index"
end

Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:index, :create]
    resource :sessions, only: [:create, :destroy]
    resources :channels, only: [:index, :create, :update, :destroy] do 
      resources :messages, only: [:index, :create, :destroy]
    end
    resources :direct_messages, only: [:index, :create, :update, :destroy] do
      resources :messages, only: [:index, :create, :destroy]
    end
  end
end

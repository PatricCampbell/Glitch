Rails.application.routes.draw do
  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resource :users, only: [:create]
    resource :sessions, only: [:create, :destroy]
  end
end

Rails.application.routes.draw do
  root 'welcome#index'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :ideas, only: [:index, :create, :update, :destroy]
      resources :tags, only: [:index]
    end
  end
end

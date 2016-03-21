Rails.application.routes.draw do
  root 'welcome#index'
  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :ideas, except: [:show]
    end
  end
end

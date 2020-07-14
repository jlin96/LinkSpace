Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html

  root to: 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :show, :index, :update] do
      member do
        get :posts
      end
    end
    resource :session, only: [:create, :destroy]
    resources :posts, only: [:create, :show, :index, :update, :destroy] do
      resources :comments, only: [:index]
    end
    resources :comments, only: [:create, :update, :destroy]
  end

end

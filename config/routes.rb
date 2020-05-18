Rails.application.routes.draw do
  post '/login', to: 'sessions#create'
  delete '/logout', to: 'sessions#destroy'
  get '/logged_in', to: 'sessions#is_logged_in?'
  
  
  namespace :api do
	  resources :users, only: [:create, :show, :index]
	  post 'user_token' => 'user_token#create'
	  post 'find_user' => 'users#find'
	end
end

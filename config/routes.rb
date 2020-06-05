Rails.application.routes.draw do
	resources	:bestsellers_list, only: :index
  	resources :best_sellers, only: [:index,:show]
	resources :users, only: [:create, :show, :update]
	post '/login', to: 'sessions#create'
	delete '/logout', to: 'sessions#destroy'
	get '/logged_in', to: 'sessions#is_logged_in?'
end

Rails.application.routes.draw do
	resources :users, only: [:create, :show, :index]
	post 'user_token' => 'user_token#create'
	post 'find_user' => 'users#find'

	mount Knock::Engine => "/knock"
end

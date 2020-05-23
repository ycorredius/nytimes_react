Rails.application.routes.draw do
	resources :users, only: [:create, :show	]
	post 'user_token' => 'user_token#create'
	post 'find_user' => 'users#find'

end

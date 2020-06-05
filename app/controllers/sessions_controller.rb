class SessionsController < ApplicationController
  # before_action :authenticate_user

  def create
    @user = User.find_by(email: session_params[:email])
    if @user && @user.authenticate(session_params[:password])
      options = {}
      options[:include] = [:best_sellers]
      login!
      render json: {
        logged_in: true,
        user: UserSerializer.new(@user,options).serialized_json
      }
    else
      render json: { 
        status: 401,
        errors: ['no such user', 'verify credentials and try again or signup']
      }
    end
  end
  
def is_logged_in?
    if logged_in? && current_user
      options = {}
      options[:include] = [:best_sellers]
      render json: {
        user: UserSerializer.new(current_user,options),
        logged_in: true
      }
    else
      render json: {
        logged_in: false,
        message: 'no such user'
      }
    end
  end
def destroy
    logout!
    render json: {
      status: 200,
      logged_out: true
    }
  end
private
def session_params
    params.require(:credentials).permit(:email, :password)
  end
end
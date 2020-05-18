class UsersController < ApplicationController
    def index
    end

    def find
     @user = User.find_by(email: params[:user][:email])
   if @user
     render json: @user
   else
     @errors = @user.errors.full_messages
     render json: @errors
   end
    end
    def show
        @user = User.find(params[:id])
       if @user
          render json: {
            user: @user
          }
        else
          render json: {
            status: 500,
            errors: ['user not found']
          }
        end
      end

      def create
        binding.pry
        @user = User.new(user_params)
        if @user.save
          login!
          render json: {
            status: :created,
            user: @user
          }
        else 
          render json: {
            status: 500,
            errors: @user.errors.full_messages
          }
        end
      end

      def user_params
        params.require(:user).permit(:firstName, :lastName, :email, :password, :password_confirmation)
      end
end

class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update]

  def create
    @user = User.new(user_params)
    if @user.valid? && @user.save
      options={}
      options[:include] = [:email,:password]
      render json: UserSerializer.new(@user,options).serialzed_json
    else
      render json: @user.errors, status: 400
    end
  end

  def show
    render json: @user
  end

  def update
    if @user.update(user_params)
      render json: @user
    else
      render json: @user.errors, status: 400
    end
  end

  def destroy
    @user.destroy
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

  private

    def set_user
      @user = User.find_by(id: params[:id])
    end

    def user_params
      params.require(:user).permit(:firstName, :lastName, :email, :password, :password_confirmation)
    end
end

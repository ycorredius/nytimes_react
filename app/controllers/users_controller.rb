class UsersController < ApplicationController
  before_action :set_user, only: [:show, :update]

  def create
    @user = User.new(user_params)
    if @user.valid? && @user.save
      render json: UserSerializer.new(@user).serialized_json
    else
      render json: @user.errors, status: 400
    end
  end

  def update
    book = BestSeller.find_by(id: params["user"]["bookId"])
    current_user.best_sellers.push(book)
    render json: current_user.best_sellers
  end

  private

    def set_user
      @user = User.find_by(id: params[:id])
    end

    def user_params
      params.require(:user).permit(:firstName, :lastName, :email, :password, :password_confirmation, :bookId)
    end
end

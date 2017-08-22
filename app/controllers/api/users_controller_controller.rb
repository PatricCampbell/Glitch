class Api::UsersControllerController < ApplicationController
  def create
    @user = User.new(user_params)

    if @user.save
      login(@user)
      render :show
    else
      render json: @user.errors, status: 401
    end
  end

  private
  def user_params
    params.permit(:user).require(:username, :password)
  end
end

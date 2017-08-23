class Api::SessionsController < ApplicationController
  def create
    @user = User.find_user_by_credentials(user_params[:username], user_params[:password])
  if @user
    login(@user)
    render :show
  else
    render json: ['Invalid Credentials'] , status: 401
  end
  end

  def destroy
    if logout.nil?
      render json: {}
    else
      render json: ["There is no user to logout"], status: 404
    end
  end

  private
  def user_params
    params.require(:user).permit(:username, :password, :avatar_url)
  end
end

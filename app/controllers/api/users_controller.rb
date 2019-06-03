class Api::UsersController < ApplicationController
  def create
    debugger
    @user = User.new(user_params)
    debugger
    if @user.save
      login(@user)
      render "api/users/show"
    else
      render json: @user.errors.full_messages, status: 422
    end
  end

  private

  def user_params
    params.require(:user).permit(:username, :password, :email, :language_strength, :site_streak, :learning_language, :learning_language_string, :rupees)
  end
end

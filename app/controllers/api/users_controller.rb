class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def create
        @user = User.new(user_params)
        if @user.save
            login!(@user)
            render :show
        else
            render json: ['Your password must be at least 6 characters long. Please try another.'], status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :birthday, :gender)
    end
end
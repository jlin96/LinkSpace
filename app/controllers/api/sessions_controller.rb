class Api::SessionsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def create
        @user = User.find_by_credentials(params[:user][:email], params[:user][:password])

        if @user.is_a? Array
            login!(@user)
            render json: @user, status: 401
        else
            render 'api/users/show'
        end
    end

    def destroy
        @user = current_user

        if @user
            logout!
        else
            render json: ['No user to log out'], status: 404
        end
    end
end
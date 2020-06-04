class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token
    
    def create
        @user = User.new(user_params)
        debugger
        if @user.save
            login!(@user)
            render :show
        else
            emptyField = [];
            if params[:user][:first_name] == '' 
                emptyField << 'fname'
            end
            if params[:user][:last_name] == ''
                emptyField << 'lname'
            end
            if params[:user][:password] == ''
                emptyField << 'password'
            end
            if params[:user][:email] == ''
                emptyField << 'email'
            end
            if params[:user][:gender] == ''
                emptyField << 'gender'
            end
            render json: ['Your password must be at least 6 characters long. Please try another.', emptyField], status: 422
        end
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :birthday, :gender)
    end
end
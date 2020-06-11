class Api::UsersController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @users = User.all
        render :index
    end
    
    def create
        @user = User.new(user_params)
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
            if params[:user][:email] == ''
                emptyField << 'email'
            end
            if params[:user][:gender] == ''
                emptyField << 'gender'
            end
            if User.email_exist(params[:user][:email]) 
                emptyField << 'emailExist'
            end
            if params[:user][:password] == ''
                emptyField << 'password'
            elsif params[:user][:password].length < 6
                emptyField << 'passwordLess'
            end
            render json: [emptyField], status: 422
        end
    end

    def show
        @user = User.find_by(id: params[:id])
        render :show
    end

    def update
        @user = User.find_by(id: params[:id])
        if(@user.update(user_params))
            render :show
        else 
            render json: @user.errors.full_messages, status: 422
        end
    end

    def posts
        @user = User.find_by(id: params[:id])
        @posts = @user.received_posts
        render :post
    end

    private

    def user_params
        params.require(:user).permit(:first_name, :last_name, :email, :password, :birthday, :gender, :bio)
    end
end
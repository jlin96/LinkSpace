class Api::FriendRequestsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @user = User.find_by(id: params[:requestee_id])
        @friend_requests = @user.requestee
        render :index
    end 

    def create
        @friend_request = FriendRequest.new(friend_request_params)
        if @friend_request.save
            render :show
        else
            render json: @friend_request.errors.full_messages, status: 422
        end
    end

    def update
        @friend_request = FriendRequest.find_by(id: params[:requestee_id])
        if @friend_request.save
            render :show
        else
            render json: @friend_request.errors.full_messages, status: 422
        end
    end

    def destroy
        @friend_request = FriendRequest.find_by(id: params[:requestee_id])
        @friend_request.destroy
    end

    private
    def friend_request_params
        params.require(:friend_request).permit(:requester_id, :requestee_id, :accepted)
    end
end
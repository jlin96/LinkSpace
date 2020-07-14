class Api::CommentsController < ApplicationController
    skip_before_action :verify_authenticity_token

    def index
        @post = Post.find_by(id: params[:post_id])
        @comments = @post.comments
        render :index
    end

    def create
        @comment = Comment.new(comment_params)
        if @comment.save
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def update
        @comment = Comment.find_by(id: params[:id])

        if(@comment.update(comment_params))
            render :show
        else
            render json: @comment.errors.full_messages, status: 422
        end
    end

    def destroy
        @comment = Comment.find_by(id: params[:id])
        @comment.destroy
    end

    private

    def comment_params
        params.require(:comment).permit(:author_id, :post_id, :body)
    end
end
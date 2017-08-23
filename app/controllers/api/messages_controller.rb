class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all.includes(:author)
  end

  def create
    @message = Message.new(message_params)

    if @message.save
      render :show
    else
      render json: @message.errors.full_messages, status: 401
    end
  end

  def destroy
    @message = Message.find(params[:id])

    @message.destroy
    render :show
  end

  private
  def message_params
    params.require(:message).permit(:author_id, :body, :id)
  end
end

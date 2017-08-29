require 'pusher'

class Api::MessagesController < ApplicationController
  def index
    @messages = Message.includes(:author).where(channel_id: params[:channel_id])
  end

  def create
    @message = Message.new(message_params)
    
    if @message.save
      Pusher.trigger('channel_' + @message.channel_id.to_s, 'new_message', {})
      render :show
    else
      render json: @message.errors.full_messages, status: 401
    end
  end

  def destroy
    @message = Message.find(params[:id])

    @message.destroy
    Pusher.trigger('channel_' + @message.channel_id.to_s, 'new_message', {})
    render :show
  end

  private
  def message_params
    params.require(:message).permit(:author_id, :channel_id, :body, :id)
  end
end

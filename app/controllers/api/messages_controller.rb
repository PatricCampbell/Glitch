class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all.includes(:author)
  end

  def create
    @message = Message.new(message_params)

    if @message.save
      render :show
    else
      # render errors
    end
  end

  def destroy
    
  end

  private
  def message_params
    params.require(:message).permit(:author_id, :body)
  end
end

class Api::MessagesController < ApplicationController
  def index
    @messages = Message.all.includes(:author)
  end

  def create
  end

  def destroy
  end

  private
  def message_params
    params.require(:message).permit(:author_id, :body)
  end
end

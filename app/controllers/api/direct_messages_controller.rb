class Api::DirectMessagesController < ApplicationController
  def index
  end

  def direct_message_params
    params.require(:direct_message).permit(:name, :description, :creator_id, :id, :channel_type)
  end
end

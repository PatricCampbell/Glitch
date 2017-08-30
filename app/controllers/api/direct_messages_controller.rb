require 'json'

class Api::DirectMessagesController < ApplicationController
  def index
    user = User.find(params[:user_id])
   
    @direct_messages = Channel.where(channel_type: true).joins(:users).where("users.id = #{user.id}")
  end

  def create
    userIds = JSON.parse(direct_message_params[:users])
    users = userIds.map do |id|
      User.find(id)
    end

    @direct_message = Channel.new()
    @direct_message.channel_type = true
    @direct_message.creator_id = users.first.id
    @direct_message.name = users.map { |user| user.username }.join(', ')

    if @direct_message.save
      Pusher.trigger('direct_messages', 'new_direct_message', {})
      users.each do |user|
        ChannelUser.create({user_id: user.id, channel_id: @direct_message.id})
      end
      render :show
    else
      render json: @direct_message.errors.full_messages, status: 401
    end
  end

  def direct_message_params
    params.require(:direct_message).permit(:users)
  end

end

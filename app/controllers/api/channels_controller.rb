require 'pusher'

class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      Pusher.trigger('channels', 'new_channel', {})
      render :show
    else
      render json: @channel.errors.full_messages, status: 401
    end
  end

  def update
    @channel = Channel.find(params[:id])

    if @channel.update(channel_params)
      Pusher.trigger('channels', 'new_channel', {})      
      render :show
    else
      render json: @channel.errors.full_messages, status: 401
    end
  end

  def destroy
    @channel = Channel.find(params[:id])

    @channel.destroy
    Pusher.trigger('channels', 'new_channel', {})
        
    render :show
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :description, :creator_id, :id)
  end

end

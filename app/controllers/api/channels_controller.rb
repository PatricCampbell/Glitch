class Api::ChannelsController < ApplicationController
  def index
    @channels = Channel.all
  end

  def create
    @channel = Channel.new(channel_params)

    if @channel.save
      render :show
    else
      render json: @channel.errors.full_messages, status: 401
    end
  end

  def update
    @channel = Channel.find(params[:id])

    if @channel.update(channel_params)
      render :show
    else
      render json: @channel.errors.full_messages, status: 401
    end
  end

  def destroy
    @channel = Channel.find(params[:id])

    @channel.destroy
    render :show
  end

  private
  def channel_params
    params.require(:channel).permit(:name, :description, :creator_id, :id)
  end

end

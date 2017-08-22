class ApplicationController < ActionController::Base
  # Prevent CSRF attacks by raising an exception.
  # For APIs, you may want to use :null_session instead.
  protect_from_forgery with: :exception
  helper_method :logged_in?, :current_user

  def current_user
    return nil if session[:session_token].nil?

    @current_user ||= User.find_by(session_token: session[:session_token])
  end

  def login(user)
    @current_user = user
    session[:session_token] = user.session_token
  end

  def logout
    current_user.try(:reset_session_token)
    session[:session_token] = nil
  end

  def logged_in?
    return false if current_user == nil
    current_user.session_token = session[:session_token]
  end

end

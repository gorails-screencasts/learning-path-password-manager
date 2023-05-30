class ApplicationController < ActionController::Base
  def current_user_password
    @_current_user_password ||= current_user.user_passwords.find_by(password: @password)
  end
  helper_method :current_user_password
end

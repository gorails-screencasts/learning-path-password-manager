class UserPassword < ApplicationRecord
  belongs_to :user
  belongs_to :password
end

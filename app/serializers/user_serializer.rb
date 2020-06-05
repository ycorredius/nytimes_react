class UserSerializer
  include FastJsonapi::ObjectSerializer
  has_many :best_sellers
  attributes :firstName, :email, :password, :best_sellers
end

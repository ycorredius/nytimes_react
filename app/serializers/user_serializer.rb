class UserSerializer
  include FastJsonapi::ObjectSerializer
  attributes :email, :password
end

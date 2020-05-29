class BestsellersPastSerializer
  include FastJsonapi::ObjectSerializer
  attributes :author, :title, :contributor, :description, :publisher, :rank_histories, :bestsellers_list
end

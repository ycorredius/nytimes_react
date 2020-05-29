class BestsellersPastsController < ApplicationController
    def index
        bestseller_past = BestsellersPast.all
        options = {}
        options[:include] = [:author, :title, :contributor, :description, :publisher,:rank_histories, :bestsellers_list]
        render json: BestsellersPastSerializer.new(bestseller_past).serialized_json
    end
end

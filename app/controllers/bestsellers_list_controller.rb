class BestsellersListController < ApplicationController
    def index 
        @list = BestsellersList.all
        render json:  BestsellerListSerializer.new(@list).serialized_json
    end
end

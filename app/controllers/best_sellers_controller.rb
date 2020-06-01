class BestSellersController < ApplicationController 
    def index
        best_sellers = BestSeller.all
        render json: BestSellerSerializer.new(best_sellers).serialized_json
    end

    def show
        best_seller = BestSeller.find_by(id: params[:id])
        if best_seller
            render json: BestSellerSerializer.new(best_seller).serialized_json
        else
            render json: best_seller.errors.full_messages
        end
    end
end

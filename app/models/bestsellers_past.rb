class BestsellersPast < ApplicationRecord
    has_many :rank_histories
    belongs_to :bestsellers_list 
    
    validates :title, presence: true
    validates :title, uniqueness: true
end

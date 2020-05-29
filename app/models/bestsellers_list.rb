class BestsellersList < ApplicationRecord
    has_many :bestsellers_pasts

    validates :list_name, uniqueness: true
end

class AddBestsellersListRefToBestsellersPast < ActiveRecord::Migration[6.0]
  def change
    add_reference :bestsellers_pasts, :bestsellers_list, null: false, foreign_key: true
  end
end

class AddBestsellerPastRefToRankHistory < ActiveRecord::Migration[6.0]
  def change
    add_reference :rank_histories, :bestsellers_past, null: false, foreign_key: true
  end
end

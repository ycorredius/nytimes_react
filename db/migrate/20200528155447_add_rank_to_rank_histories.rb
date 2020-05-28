class AddRankToRankHistories < ActiveRecord::Migration[6.0]
  def change
    add_column :rank_histories, :rank, :integer
  end
end

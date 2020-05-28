class CreateRankHistories < ActiveRecord::Migration[6.0]
  def change
    create_table :rank_histories do |t|
      t.integer :isbn10
      t.integer :isbn13
      t.string :list_name
      t.string :published_date
      t.string :bestsellers_date

      t.timestamps
    end
  end
end

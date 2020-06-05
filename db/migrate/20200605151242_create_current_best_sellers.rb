class CreateCurrentBestSellers < ActiveRecord::Migration[6.0]
  def change
    create_table :current_best_sellers do |t|
      t.integer :rank
      t.integer :rank_last_week
      t.string :title
      t.string :author
      t.string :publisher
      t.string :description
      t.string :book_image

      t.timestamps
    end
  end
end

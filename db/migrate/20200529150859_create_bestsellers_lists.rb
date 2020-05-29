class CreateBestsellersLists < ActiveRecord::Migration[6.0]
  def change
    create_table :bestsellers_lists do |t|
      t.string :list_name
      t.string :list_name_encoded
      t.date :oldest_published_date
      t.date :newest_published_date
      t.string :updated

      t.timestamps
    end
  end
end

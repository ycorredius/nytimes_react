class CreateBestsellersPasts < ActiveRecord::Migration[6.0]
  def change
    create_table :bestsellers_pasts do |t|
      t.string :author
      t.string :title
      t.string :publisher
      t.string :description
      t.string :contributor
      
      t.timestamps
    end
  end
end

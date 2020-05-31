class CreateBestSellers < ActiveRecord::Migration[6.0]
  def change
    create_table :best_sellers do |t|
      t.string :author
      t.string :title
      t.string :publisher
      t.string :description
      t.string :contributor
      t.string :amazon_product_url
      t.string :book_review_link
      t.string :first_chapter_link
      t.string :sunday_review_link
      t.string :article_chapter_link
      t.date :bestseller_date
      t.date :published_date
      t.integer :rank

      t.timestamps
    end
  end
end

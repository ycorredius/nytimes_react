class BestSellerSerializer
  include FastJsonapi::ObjectSerializer
  attributes :title, :author, :publisher, :description, :contributor, :amazon_product_url, :book_review_link, :first_chapter_link, :sunday_review_link, :article_chapter_link, :bestseller_date, :published_date
end

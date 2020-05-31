# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

# list = Api.listsNameRequest
# list.values[3].each do |p|
#     BestsellersList.create(list_name: p["list_name"], list_name_encoded: p["list_name_encoded"], oldest_published_date: p["oldest_published_date"], newest_published_date: p["newest_published_date"])
# end

# bestsellers_past = Api.bestsellersRequest
# bestsellers_past.values[3].each do |p|
#     list_name = BestsellersList.find_by(list_name: p['ranks_history'][0]['list_name'])
#     book = list_name.bestsellers_pasts.create(author: p["author"], title: p["title"], publisher: p["publisher"], contributor: p["contributor"], description: p["description"], bestsellers_list_id: list_name.id)
#     p["ranks_history"].each do |t|
#         book.rank_histories.create(rank: t["rank"], list_name: t["list_name"], published_date: t["published_date"], bestsellers_date: t["bestsellers_date"], isbn10: t["primary_isbn10"], isbn13: t["primary_isbn13"])  
#     end
# end

list_by_name = BestsellersList.all
list_by_name.each do |p|
    books = Api.fetchBestsellersByLists(p.list_name_encoded)
    if books['results']
        books['results'].each do |book|
            book['book_details'].each do |t|
                book['reviews'].each do |review|
                    BestSeller.create(author: t['author'], 
                    title: t['title'], 
                    publisher: t['publisher'], 
                    description: t['description'], 
                    contributor: t['contributor'], 
                    amazon_product_url: book['amazon_product_url'], 
                    book_review_link: review['book_review_link'], 
                    first_chapter_link: review['first_chapter_link'], 
                    sunday_review_link: review['sunday_review_link'], 
                    article_chapter_link: review['article_chapter_link'], 
                    bestseller_date: book['bestsellers_date'], 
                    published_date: book['published_date'], 
                    rank: book['rank'])
                end
            end
        end
    end
    
end

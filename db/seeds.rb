# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

list = Api.listsNameRequest
list.values[3].each do |p|
    BestsellersList.create(list_name: p["list_name"], list_name_encoded: p["list_name_encoded"], oldest_published_date: p["oldest_published_date"], newest_published_date: p["newest_published_date"])
end

bestsellers_past = Api.bestsellersRequest
bestsellers_past.values[3].each do |p|
    list_name = BestsellersList.find_by(list_name: p['ranks_history'][0]['list_name'])
    book = list_name.bestsellers_pasts.create(author: p["author"], title: p["title"], publisher: p["publisher"], contributor: p["contributor"], description: p["description"], bestsellers_list_id: list_name.id)
    p["ranks_history"].each do |t|
        book.rank_histories.create(rank: t["rank"], list_name: t["list_name"], published_date: t["published_date"], bestsellers_date: t["bestsellers_date"], isbn10: t["primary_isbn10"], isbn13: t["primary_isbn13"])  
    end
end


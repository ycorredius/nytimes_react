# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

bestsellers_past = Api.bestsellersRequest
bestsellers_past.values[3].each do |p|
    best = BestsellersPast.create(author: p["author"], title: p["title"], publisher: p["publisher"], contributor: p["contributor"], description: p["description"])
    p["ranks_history"].each do |t|
        best.rank_histories.create(rank: t["rank"], list_name: t["list_name"], published_date: t["published_date"], bestsellers_date: t["bestsellers_date"], isbn10: t["primary_isbn10"], isbn13: t["primary_isbn13"])  
    end
end

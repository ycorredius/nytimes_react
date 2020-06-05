# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# This file is the source Rails uses to define your schema when running `rails
# db:schema:load`. When creating a new database, `rails db:schema:load` tends to
# be faster and is potentially less error prone than running all of your
# migrations from scratch. Old migrations may fail to apply correctly if those
# migrations use external dependencies or application code.
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 2020_06_05_151242) do

  create_table "best_sellers", force: :cascade do |t|
    t.string "author"
    t.string "title"
    t.string "publisher"
    t.string "description"
    t.string "contributor"
    t.string "amazon_product_url"
    t.string "book_review_link"
    t.string "first_chapter_link"
    t.string "sunday_review_link"
    t.string "article_chapter_link"
    t.date "bestseller_date"
    t.date "published_date"
    t.integer "rank"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "user_id"
    t.index ["user_id"], name: "index_best_sellers_on_user_id"
  end

  create_table "bestsellers_lists", force: :cascade do |t|
    t.string "list_name"
    t.string "list_name_encoded"
    t.date "oldest_published_date"
    t.date "newest_published_date"
    t.string "updated"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "current_best_sellers", force: :cascade do |t|
    t.integer "rank"
    t.integer "rank_last_week"
    t.string "title"
    t.string "author"
    t.string "publisher"
    t.string "description"
    t.string "book_image"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "firstName"
    t.string "lastName"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "best_sellers", "users"
end

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

ActiveRecord::Schema.define(version: 2020_05_29_152245) do

  create_table "bestsellers_lists", force: :cascade do |t|
    t.string "list_name"
    t.string "list_name_encoded"
    t.date "oldest_published_date"
    t.date "newest_published_date"
    t.string "updated"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  create_table "bestsellers_pasts", force: :cascade do |t|
    t.string "author"
    t.string "title"
    t.string "publisher"
    t.string "description"
    t.string "contributor"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "bestsellers_list_id", null: false
    t.index ["bestsellers_list_id"], name: "index_bestsellers_pasts_on_bestsellers_list_id"
  end

  create_table "rank_histories", force: :cascade do |t|
    t.integer "isbn10"
    t.integer "isbn13"
    t.string "list_name"
    t.string "published_date"
    t.string "bestsellers_date"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
    t.integer "bestsellers_past_id", null: false
    t.integer "rank"
    t.index ["bestsellers_past_id"], name: "index_rank_histories_on_bestsellers_past_id"
  end

  create_table "users", force: :cascade do |t|
    t.string "firstName"
    t.string "lastName"
    t.string "email"
    t.string "password_digest"
    t.datetime "created_at", precision: 6, null: false
    t.datetime "updated_at", precision: 6, null: false
  end

  add_foreign_key "bestsellers_pasts", "bestsellers_lists"
  add_foreign_key "rank_histories", "bestsellers_pasts"
end

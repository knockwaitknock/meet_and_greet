# encoding: UTF-8
# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20150213205342) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "magazines", force: true do |t|
    t.string   "title"
    t.string   "code"
    t.text     "comment"
    t.boolean  "published"
    t.integer  "sort"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

  create_table "meetings", force: true do |t|
    t.date     "date_from"
    t.time     "time_from"
    t.time     "time_to"
    t.text     "desc"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.boolean  "published"
  end

  create_table "members", force: true do |t|
    t.string   "photo"
    t.string   "name"
    t.text     "desc"
    t.datetime "created_at"
    t.datetime "updated_at"
    t.integer  "sort"
    t.boolean  "published"
  end

  create_table "questions", force: true do |t|
    t.string   "title"
    t.text     "answer"
    t.integer  "sort"
    t.boolean  "published"
    t.datetime "created_at"
    t.datetime "updated_at"
  end

end

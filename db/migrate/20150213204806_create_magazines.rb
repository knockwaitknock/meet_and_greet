class CreateMagazines < ActiveRecord::Migration
  def change
    create_table :magazines do |t|
      t.string :title
      t.string :code
      t.text :comment
      t.boolean :published
      t.integer :sort

      t.timestamps
    end
  end
end

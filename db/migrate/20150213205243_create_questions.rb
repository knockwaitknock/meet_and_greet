class CreateQuestions < ActiveRecord::Migration
  def change
    create_table :questions do |t|
      t.string :title
      t.text :answer
      t.integer :sort
      t.boolean :published

      t.timestamps
    end
  end
end

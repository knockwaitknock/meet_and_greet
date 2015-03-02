class CreateMembers < ActiveRecord::Migration
  def change
    create_table :members do |t|
      t.string :photo
      t.string :name
      t.text :desc

      t.timestamps
    end
  end
end

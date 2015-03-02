class AddPublishedToMembers < ActiveRecord::Migration
  def change
    add_column :members, :published, :boolean
  end
end

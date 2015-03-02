class AddSortToMembers < ActiveRecord::Migration
  def change
    add_column :members, :sort, :integer
  end
end

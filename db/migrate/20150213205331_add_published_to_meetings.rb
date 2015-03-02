class AddPublishedToMeetings < ActiveRecord::Migration
  def change
    add_column :meetings, :published, :boolean
  end
end

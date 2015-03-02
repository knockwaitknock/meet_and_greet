class CreateMeetings < ActiveRecord::Migration
  def change
    create_table :meetings do |t|
      t.date :date_from
      t.time :time_from
      t.time :time_to
      t.text :desc

      t.timestamps
    end
  end
end

class Meeting < ActiveRecord::Base
  validates_presence_of :date_from, :time_from, :desc

  default_scope { order('date_from ASC, time_from ASC') }
  scope :published, -> () { where(published: true) }
  scope :current, -> () { where("date_from >= ?", DateTime.now.to_date) }
end

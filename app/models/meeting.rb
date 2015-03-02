class Meeting < ActiveRecord::Base
  default_scope { order('date_from ASC') }
  scope :published, -> () { where(published: true) }
  scope :current, -> () { where("date_from >= ?", DateTime.now.to_date) }
end

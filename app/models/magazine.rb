class Magazine < ActiveRecord::Base
  default_scope { order('sort ASC') }
  scope :published, -> () { where(published: true) }
end

class Magazine < ActiveRecord::Base
  validates_presence_of :title, :code
  default_scope { order('sort ASC') }
  scope :published, -> () { where(published: true) }
end

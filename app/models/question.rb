class Question < ActiveRecord::Base
  validates_presence_of :title, :answer
  default_scope { order('sort ASC') }
  scope :published, -> () { where(published: true) }
end

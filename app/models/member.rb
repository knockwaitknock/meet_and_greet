class Member < ActiveRecord::Base
  validates_presence_of :photo, :name, :desc
  mount_uploader :photo, MemberUploader
  default_scope { order('sort ASC') }
  scope :published, -> () { where(published: true) }
end

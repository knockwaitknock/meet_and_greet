class Member < ActiveRecord::Base
  mount_uploader :photo, MemberUploader
  default_scope { order('sort ASC') }
  scope :published, -> () { where(published: true) }
end

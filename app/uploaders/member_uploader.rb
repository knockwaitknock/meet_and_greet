# encoding: utf-8

class MemberUploader < CarrierWave::Uploader::Base
  include CarrierWave::MiniMagick

  # include Sprockets::Helpers::RailsHelper
  # include Sprockets::Helpers::IsolatedHelper

  storage :file

  include CarrierWave::MimeTypes
  process :set_content_type

  def store_dir
    "storage/#{model.class.to_s.underscore}/#{mounted_as}/#{model.id}"
  end

  version :regular do
    process :resize_to_fill => [170,170]
  end

  def extension_white_list
    %w(jpg jpeg gif png)
  end
end

# encoding: utf-8

class MemberUploader < CarrierWave::Uploader::Base
  include CarrierWave::MimeTypes
  include CarrierWave::MiniMagick

  storage :fog
  process :set_content_type

  def store_dir
    "storage/#{model.class.base_class.name.underscore}/#{model.id}"
  end

  def filename
    "#{mounted_as}#{File.extname(original_filename)}" if original_filename.present?
  end

  version :regular do
    process :resize_to_fill => [170,170]
  end

end

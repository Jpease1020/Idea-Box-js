class Tag < ActiveRecord::Base
  belongs_to :idea
  validates :tag, uniqueness: true
end

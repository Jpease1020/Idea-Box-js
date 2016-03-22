class Idea < ActiveRecord::Base

  def self.set_quality
    ["swill", "plausible", "genius"]
  end
end

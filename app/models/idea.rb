class Idea < ActiveRecord::Base
  has_many :tags

  def self.set_quality
    ["swill", "plausible", "genius"]
  end

  def update_title_and_or_body(idea, idea_params)
    idea.update(idea_params)
  end

  def update_quality(idea, params)
    current_position = Idea.set_quality.index(idea.quality)
    if params[:thumb_action] == "thumbs-up" && idea.quality != "genius"
      idea.update(quality: Idea.set_quality[current_position += 1])
    elsif params[:thumb_action] == "thumbs-down" && idea.quality != "swill"
      idea.update(quality: Idea.set_quality[current_position -= 1])
    end
  end
end

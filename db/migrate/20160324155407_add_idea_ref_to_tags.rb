class AddIdeaRefToTags < ActiveRecord::Migration
  def change
    add_reference :tags, :idea, index: true
  end
end

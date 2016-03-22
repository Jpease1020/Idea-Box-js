class ChangeQualityFieldInIdeas < ActiveRecord::Migration
  def change
    remove_column :ideas, :quality, :integer
    add_column :ideas, :quality, :string, default: "swill"
  end
end

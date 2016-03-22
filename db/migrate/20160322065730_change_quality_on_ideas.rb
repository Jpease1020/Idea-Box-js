class ChangeQualityOnIdeas < ActiveRecord::Migration
  def change
    remove_column :ideas, :quality, :string
    add_column :ideas, :quality, :integer, default: 0
  end
end

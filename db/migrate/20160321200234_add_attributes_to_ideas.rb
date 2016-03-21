class AddAttributesToIdeas < ActiveRecord::Migration
  def change
    add_column :ideas, :title, :string
    add_column :ideas, :body, :string
    add_column :ideas, :quality, :string
  end
end

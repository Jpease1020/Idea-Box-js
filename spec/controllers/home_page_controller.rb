require "rails_helper"

describe "Ideas controller" do
  describe "root" do
    it "home page is the root path" do
      idea = create(:idea)
      get '/'
      expect(page).to be(root_path)
    end
  end
end

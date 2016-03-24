require 'rails_helper'

RSpec.describe Idea, type: :model do
  describe "idea" do
    it "can create an idea with valid attributes" do
      idea = create(:idea)

      expect(idea.title).to eq("This is the title if the idea")
      expect(idea.body).to eq("this is the body of my idea")
      expect(idea.quality).to eq("swill")
    end

    it "default quality of the idea is swill" do
      idea = Idea.create(title: "A new Idea", body: "chocolate bacon")

      expect(idea.quality).to eq("swill")
    end

  end

  describe "updates attributes" do
    it "updates the title" do
      idea = Idea.create(title: "title", body: "body")
      idea.update(title: "a new title")

      expect(idea.title).to eq("a new title")
    end

    it "updates the body" do
      idea = Idea.create(title: "title", body: "body")
      idea.update(body: "a brand new body")

      expect(idea.body).to eq("a brand new body")
    end

    it "updates the title" do
      idea = Idea.create(title: "title", body: "body")
      idea.update(quality: "genius")

      expect(idea.quality).to eq("genius") 
    end
  end
end

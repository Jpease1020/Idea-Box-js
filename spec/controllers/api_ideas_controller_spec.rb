require "rails_helper"

RSpec.describe Api::V1::IdeasController, :type => :controller do
  describe "Ideas controller" do
    describe "index" do
      it "home page is the root path" do
        idea = create(:idea)

        get "index", format: :json

        expect(response.status).to eq 200
        ideas = JSON.parse(response.body)
        expect(idea["title"]).to eq "This is the title if the idea"
      end
    end

    describe "create" do
      it "home page is the root path" do
        idea = create(:idea, title: "a new title", body: "okok")

        get "create", format: :json, title: idea.title

        expect(response.status).to eq 200
        ideas = JSON.parse(response.body)
        expect(idea["title"]).to eq "a new title"
        expect(idea["body"]).to eq "okok"
      end
    end
  end
end

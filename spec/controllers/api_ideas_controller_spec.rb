require "rails_helper"

RSpec.describe Api::V1::IdeasController, :type => :controller do
  describe "Ideas controller" do
    describe "index" do
      it "index returns ideas" do
        idea = create(:idea)

        get "index", format: :json

        expect(response.status).to eq 200
        ideas = JSON.parse(response.body)
        expect(idea["title"]).to eq "This is the title if the idea"
      end
    end

    describe "create" do
      it "creates and returns an idea" do
        idea = create(:idea, title: "a new title", body: "okok")

        post "create", format: :json, title: idea.title

        expect(response.status).to eq 201
        ideas = JSON.parse(response.body)
        expect(idea["title"]).to eq "a new title"
        expect(idea["body"]).to eq "okok"
      end
    end

    describe "update" do
      it "updates and returns an idea" do
        idea = create(:idea, title: "a new title", body: "okok")

        put "update", format: :json, controller: "api/vi/ideas/#{idea.id}", id: idea.id, title: "changing it up"

        expect(response.status).to eq 200
        ideas = JSON.parse(response.body)
        expect(idea["title"]).to eq "a new title"
        expect(idea["body"]).to eq "okok"
      end
    end

    describe "delete" do
      it "deletes an idea" do
        idea = create(:idea, title: "a new title", body: "okok")

        delete "destroy", format: :json, controller: "api/vi/ideas/#{idea.id}", id: idea.id

        expect(response.status).to eq 200
        ideas = JSON.parse(response.body)
        expect(idea["title"]).to eq "a new title"
        expect(idea["body"]).to eq "okok"
      end
    end
  end
end

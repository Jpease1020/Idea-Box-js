require "rails_helper"

RSpec.describe "User thumbs up an idea", type: :feature do
  scenario "idea is created will default swill quality then upgraded", js: true do
    visit root_path

    fill_in "new-idea-title", with: "My new idea title"
    fill_in "new-idea-body", with: "My new idea body"
    click_on "Save Idea"

    expect(Idea.count).to eq(1)

    click_on('.thumbs-up-button')
  end
end

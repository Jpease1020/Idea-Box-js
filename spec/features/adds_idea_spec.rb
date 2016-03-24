require "rails_helper"

RSpec.describe "User adds a new idea", type: :feature do
  scenario "idea is created, and added to the database and is displayed on the page", js: true do
    visit root_path

    fill_in "new-idea-title", with: "My new idea title"
    fill_in "new-idea-body", with: "My new idea body"
    click_on "Save Idea"

    expect(Idea.count).to eq(1)
  end
end

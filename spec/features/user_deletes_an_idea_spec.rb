require "rails_helper"

RSpec.describe "User deletes an idea", type: :feature do
  scenario "idea is created, added to the database and page, then deleted from both", js: true do
    visit root_path

    fill_in "new-idea-title", with: "My new idea title"
    fill_in "new-idea-body", with: "My new idea body"
    click_on "Save Idea"

    expect(Idea.count).to eq(1)

    click_on "Delete Idea"

    expect(Idea.count).to eq(0)
  end
end

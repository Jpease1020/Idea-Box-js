class WelcomeController < ApplicationController
  def index
    @tags = Tag.all.uniq.order(tag: :asc)
  end
end

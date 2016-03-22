class Api::V1::IdeasController < Api::ApiController
  respond_to :json
  def index
    respond_with Idea.all.order(created_at: :desc)
  end

  def create
    respond_with :api, :v1, Idea.create(title: params['ideaTitle'], body: params['ideaBody'])
  end
end

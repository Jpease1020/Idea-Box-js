class Api::V1::TagsController < Api::ApiController
  respond_to :json
  def index
    tag = Tag.find_by(tag: params[:tag])
    tag.idea_id
    ideas = Idea.where(id: tag.idea_id)
    respond_with ideas
  end
end

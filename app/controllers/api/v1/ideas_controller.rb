class Api::V1::IdeasController < Api::ApiController
  respond_to :json
  def index
    respond_with Idea.all.order(created_at: :desc)
  end

  def create
    idea = Idea.create(title: idea_params[:title], body: idea_params[:body])
    add_or_create_tags(idea,idea_params[:tags])
    respond_with :api, :v1, idea
  end

  def update
    idea = Idea.find(params[:id])
    idea.update_quality(idea, params) || idea.update_title_and_or_body(idea, idea_params)
    render json: idea
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end

  private

  def idea_params
    params.permit(:title, :body, :id, :tags, :format)
  end

  def add_or_create_tags(idea, tags)
    tags.split(', ').each do |tag|
      tag = Tag.find_or_create_by(tag: tag)
      tag.id = idea.id
      byebug
    end
  end
end

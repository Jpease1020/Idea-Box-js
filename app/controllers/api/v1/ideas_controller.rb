class Api::V1::IdeasController < Api::ApiController
  respond_to :json
  def index
    respond_with Idea.all.order(created_at: :desc)
  end

  def create
    respond_with :api, :v1, Idea.create(idea_params)
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
    params.permit(:title, :body, :id)
  end
end

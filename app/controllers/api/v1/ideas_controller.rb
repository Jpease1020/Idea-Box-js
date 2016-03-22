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
    update_quality(idea) || update_title_and_or_body(idea)
  end

  def destroy
    respond_with Idea.destroy(params[:id])
  end

  private

  def idea_params
    params.permit(:title, :body, :id)
  end

  def update_title_and_or_body(idea)
    idea.update(idea_params)
    render json: idea
  end

  def update_quality(idea)
    if params[:thumb_action] == "thumbs-up" && idea.quality != "genius"
      current_position = Idea.set_quality.index(idea.quality)
      new_position = current_position += 1
      idea.update(quality: Idea.set_quality[new_position])
      render json: idea
    elsif params[:thumb_action] == "thumbs-down" && idea.quality != "swill"
      current_position = Idea.set_quality.index(idea.quality)
      new_position = current_position -= 1
      idea.update(quality: Idea.set_quality[new_position])
      render json: idea
    end
  end
end

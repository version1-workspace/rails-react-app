class Api::V1::RootController < ActionController::API
  def show
    render json: {
      message: "ok",
    }
  end
end

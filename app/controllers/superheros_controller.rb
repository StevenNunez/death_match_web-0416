class SuperherosController < ApplicationController
  def index
    render json: Superhero.all
  end

  def create
    hero = Superhero.create(superhero_params)
    render json: hero
  end

  private
  def superhero_params
    params.require(:superhero).permit(:name, :super_powers, :description)
  end
end

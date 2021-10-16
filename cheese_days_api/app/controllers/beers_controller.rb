class BeersController < ApplicationController
    before_action :set_cheese_shop, only: [:show, :update, :destroy]

    # GET /beers
    def index
      @beers = Beer.all
  
      render json: @beers
    end  

    def show
        @beer = Beer.find(params[:id])
        render json: @beer
    end 

    def create
        @beer = Beer.create(
            name: params[:name],
            beer_type: params[:beer_type],
            strength: params[:strength],
            country: params[:country],
            flavour_profile: params[:flavour_profile]
        )
        render json: @beer
    end 

    def update
        @beer = beer.find(params[:id])
        @beer.update(
            name: params[:name],
            beer_type: params[:beer_type],
            strength: params[:strength],
            country: params[:country],
            flavour_profile: params[:flavour_profile]
        )
        render json: @beer
    end 

    def destroy
        @beers = beer.all 
        @beer = beer.find(params[:id])
        @beer.destroy
        render json: @beers
    end 
end

class CheeseShopsController < ApplicationController
  before_action :set_cheese_shop, only: [:show, :update, :destroy]

  # GET /cheese_shops
  def index
    @cheese_shops = CheeseShop.all

    render json: @cheese_shops
  end

  # GET /cheese_shops/1
  def show
    render json: @cheese_shop
  end

  # POST /cheese_shops
  def create
    @cheese_shop = CheeseShop.new(cheese_shop_params)

    if @cheese_shop.save
      render json: @cheese_shop, status: :created, location: @cheese_shop
    else
      render json: @cheese_shop.errors, status: :unprocessable_entity
    end
  end

  # PATCH/PUT /cheese_shops/1
  def update
    if @cheese_shop.update(cheese_shop_params)
      render json: @cheese_shop
    else
      render json: @cheese_shop.errors, status: :unprocessable_entity
    end
  end

  # DELETE /cheese_shops/1
  def destroy
    @cheese_shop.destroy
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_cheese_shop
      @cheese_shop = CheeseShop.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def cheese_shop_params
      params.require(:cheese_shop).permit(:name, :location)
    end
end

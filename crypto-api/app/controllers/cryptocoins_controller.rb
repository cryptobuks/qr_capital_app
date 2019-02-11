class CryptocoinsController < ApplicationController
  def index
    @cryptocoin = Cryptocompare.TopTen
    render json: @cryptocoin
=begin
    @cryptocoin = Cryptocompare.chama_get
=end
  end
end

require 'test_helper'

class CryptocoinsControllerTest < ActionDispatch::IntegrationTest
  test "should get index" do
    get cryptocoins_index_url
    assert_response :success
  end

end

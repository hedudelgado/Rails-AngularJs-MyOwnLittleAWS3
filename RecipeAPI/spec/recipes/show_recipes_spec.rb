require 'rails_helper'

RSpec.describe "/recipe", type: :request do
describe 'GET /recipes.json' do
    before do
      params = {:recipe => {:name => "pizza margarita"}}
      post "/recipes.json", params.to_json, {'ACCEPT' => "application/json", 'CONTENT_TYPE' => 'application/json'}
      params = {:recipe => {:name => "chicken"}}
      post "/recipes.json", params.to_json, {'ACCEPT' => "application/json", 'CONTENT_TYPE' => 'application/json'}
    end
    it 'gets a recipe' do
      expect(Recipe.first.name).to eq("pizza margarita")
      expect(Recipe.last.name).to eq("chicken")
    end
  end
end
require 'rails_helper'

RSpec.describe "/recipe/update", type: :request do
describe 'GET /recipes/1/edit.json' do
    before do
      params = {:recipe => {:name => "pizza margarita"}}
      post "/recipes.json", params.to_json, {'ACCEPT' => "application/json", 'CONTENT_TYPE' => 'application/json'}
    end
    it 'updates the recipe' do
      params = {:recipe => {:name => "pizza margherita"}}
      put "/recipes/1.json", params.to_json, {'ACCEPT' => "application/json", 'CONTENT_TYPE' => 'application/json'}
      expect(Recipe.last.name).to eq "pizza margherita"
    end
  end
end
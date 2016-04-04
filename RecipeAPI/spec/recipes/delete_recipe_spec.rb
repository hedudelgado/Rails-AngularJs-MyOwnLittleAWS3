require 'rails_helper'

RSpec.describe "/recipe", type: :request do
	describe 'DELETE /recipes.json' do
		before do
			params = {:recipe => {:name => "pizza margarita", :instructions => "Boil for 20 minutes"}}
			post "/recipes.json", params.to_json, {'ACCEPT' => "application/json", 'CONTENT_TYPE' => 'application/json'}
			params = {:recipe => {:name => "Arrabiata", :instructions => "Boil for 20 minutes, and tomato"}}
			post "/recipes.json", params.to_json, {'ACCEPT' => "application/json", 'CONTENT_TYPE' => 'application/json'}
		end
		it 'delete a recipe' do 
			expect(Recipe.last.name).to eq "Arrabiata"
			delete "/recipes/2.json"
			expect(Recipe.last.name).to eq "pizza margarita" 
		end
	end
end
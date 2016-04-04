json.array!(@recipes) do |recipe|
  json.extract! recipe, :id, :name, :photo, :instructions
  json.url recipe_url(recipe, format: :json)
end

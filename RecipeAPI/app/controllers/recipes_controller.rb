class RecipesController < ApplicationController
  before_action :set_recipe, only: [:show, :edit, :update, :destroy]

  # GET /recipes
  # GET /recipes.json
  def index
    @recipes = Recipe.all
  end

  # GET /recipes/1
  # GET /recipes/1.json
  def show
  end

  def image
    @recipe = Recipe.find(params[:recipe_id])
     image = File.open(@recipe.photo, "rb") {|io| io.read}
     send_data image, type: "image/jpeg", disposition: 'inline'
   end

  # GET /recipes/image/id
  def new
    @recipe = Recipe.new
  end

  # GET /recipes/1/edit
  def edit
  end

  # POST /recipes
  # POST /recipes.json
  def create 
      ext = params[:avatar].tempfile.path.split('.').last
      photoname = "/Users/sorry/Projects/Recipes-project/s3/"+SecureRandom.hex+ext 
      FileUtils.cp(params[:avatar].tempfile.path, photoname)
      # params = 
      #           { :recipe => {
      #            :name => params[:name], 
      #            :instructions=> params[:instructions],
      #            :photo=> photoname
      #          }}
     @recipe = Recipe.new(name:params[:name],instructions: params[:instructions], photo: photoname)
      #@recipe = Recipe.new(recipe_params) 
    respond_to do |format|
      if @recipe.save
        format.html { redirect_to @recipe, notice: 'Recipe was successfully created.' }
        format.json { render :show, status: :created, location: @recipe }
      else
        format.html { render :new }
        format.json { render json: @recipe.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /recipes/1
  # PATCH/PUT /recipes/1.json
  def update
    respond_to do |format|
      if @recipe.update(recipe_params)
        format.html { redirect_to @recipe, notice: 'Recipe was successfully updated.' }
        format.json { render :show, status: :ok, location: @recipe }
      else
        format.html { render :edit }
        format.json { render json: @recipe.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /recipes/1
  # DELETE /recipes/1.json
  def destroy
    @recipe.destroy
    respond_to do |format|
      format.html { redirect_to recipes_url, notice: 'Recipe was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_recipe
      @recipe = Recipe.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def recipe_params
      p params
      params.require(:recipe).permit(:name, :instructions, :photo)
      #
    end
end

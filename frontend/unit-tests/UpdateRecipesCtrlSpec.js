describe("UpdateRecipesCtrl", function(){
  var ctrl, scope, data, param, location, field
  beforeEach(function(){
    module('recipesApp.updaterecipe');
    inject(function($controller, $rootScope, _$httpBackend_, $location, $routeParams){
      $httpBackend = _$httpBackend_;
      routeParams = $routeParams
      params = JSON.stringify({name: field})
      $httpBackend.expectPUT("http://localhost:3000/recipes/1.json", params).respond(200)
      location = $location
      scope = $rootScope.$new();
      ctrl = $controller("UpdateRecipesCtrl", {$scope: scope, $routeParams: {recipeId: "1"}});
      field = "string"
    });
  });

  it("sends a request to the backend", function(){
    scope.editRecipe()
    $httpBackend.flush()
    expect(location.path()).toBe('/recipes/1')
  });
});
describe('DeleteRecipesCtrl', function(){
  var ctrl, scope, params, location
 
  beforeEach(function(){
    module('recipesApp.postrecipe');
    inject(function($controller, $location, $rootScope, _$httpBackend_){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectDELETE('http://localhost:3000/recipes.json', params).respond(200)
      location = $location
      scope = $rootScope.$new();
      ctrl = $controller('DeleteRecipesCtrl', {$scope:scope})
      var params = {id: 1, name: "Pizza margarita", instructions: "Cook 20 minutes"}
    });
    it('sends a delete request the api', function(){
      scope.deleteRecipe(recipeId)
      httpBackend.flush()
      expect(location.path()).toBe("/recipes")
    });
  });
});



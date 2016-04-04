describe('PostRecipesCtrl', function(){
  var ctrl, scope, params, location
  
  beforeEach(function(){
    module('recipesApp.postrecipe');
    inject(function($controller, $location, $rootScope, _$httpBackend_){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectPOST('http://localhost:3000/recipes.json', params).respond(200)
      location = $location
      scope = $rootScope.$new();
      ctrl = $controller('PostRecipesCtrl', {$scope:scope})
      var params = {id: 1, name: "Pizza margarita", instructions: "Cook 20 minutes"}
    });
  });
  it('send a post request to the api', function(){
  	scope.postRecipe()
  	$httpBackend.flush()
    expect(location.path()).toBe('/recipes')
  })
});
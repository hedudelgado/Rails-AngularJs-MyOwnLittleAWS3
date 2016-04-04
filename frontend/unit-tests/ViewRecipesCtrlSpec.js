describe('ViewRecipesCtrl', function(){
  var ctrl, scope, $httpBackend
  var data = [{id: 1, name: "Pizza margarita"}, {id: 2, name: "rotten food"}]

  beforeEach(function(){
    module('recipesApp.viewrecipes');
    inject(function($controller, $rootScope, _$httpBackend_){
      $httpBackend = _$httpBackend_;
      $httpBackend.expectGET('http://localhost:3000/recipes.json').respond(data)
      scope = $rootScope.$new();
      ctrl = $controller('ViewRecipesCtrl', {$scope:scope})
    });
  });


  it('has a attribute called $scope.recipes that returns an object from api', function(){
  	scope.viewRecipes()
  	$httpBackend.flush()
    expect(scope.recipes).toEqual(data)
  })
  it('has an object called $scope.recipes that contains the name of a recipe from api', function(){
    scope.viewRecipes()
    $httpBackend.flush()
    expect(scope.recipes[0].name).toEqual('Pizza margarita')
  })
});

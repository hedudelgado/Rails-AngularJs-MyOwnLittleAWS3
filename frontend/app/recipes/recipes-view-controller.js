'use strict';

angular.module('recipesApp.viewrecipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes-view', {
    templateUrl: 'recipes/recipes-view.html',
    controller: 'ViewRecipesCtrl'
  });
}])

.controller('ViewRecipesCtrl', [ "$scope", "$http", function($scope, $http) {
 $scope.viewRecipes = function() {
 	$http.get('http://localhost:3000/recipes.json').success(function(data){
 		$scope.recipes = data
 	});
 }
}]);
'use strict';

angular.module('recipesApp.recipes', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes', {
    templateUrl: 'recipes/recipes.html',
    controller: 'RecipesCtrl'
  });
}])

.controller('RecipesCtrl', [function() {
  $scope.recipes = ["one", "two", "three", "four"]
}]);
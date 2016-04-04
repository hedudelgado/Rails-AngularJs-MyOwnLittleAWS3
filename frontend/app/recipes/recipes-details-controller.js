'use strict';

angular.module('recipesApp.viewrecipesdetails', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes/:recipeId', {
    templateUrl: 'recipes/recipes-details.html',
    controller: 'ViewRecipesDetailsCtrl'
  });
}])

.controller('ViewRecipesDetailsCtrl', [ "$scope", "$http", "$routeParams", function($scope, $http, $routeParams) {
  var number = $routeParams.recipeId
 	$http.get('http://localhost:3000/recipes/' + number + '.json').success(function(data){
 		$scope.recipe = data
 	});
}]);
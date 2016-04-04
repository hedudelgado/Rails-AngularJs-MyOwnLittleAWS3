'use strict';

angular.module('recipesApp.updaterecipe', ['ngRoute'])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/recipes/:recipeId/edit-recipe', {
    templateUrl: 'recipes/update-recipe-form.html',
    controller: 'UpdateRecipesCtrl'
  });
}])

.controller('UpdateRecipesCtrl', [ "$scope", "$http", '$location', '$routeParams', function($scope, $http, $location, $routeParams) {
 $scope.editRecipe = function(name, instructions) {
  var param = JSON.stringify({name, instructions})
  var number = $routeParams.recipeId
  $http.put('http://localhost:3000/recipes/' + number + '.json', param).success(function(data, status){
    $location.path('/recipes/'+number)
    });
  };
 }]);
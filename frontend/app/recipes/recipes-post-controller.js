'use strict';

var myModule = angular.module('recipesApp.postrecipe', ['ngRoute'])

myModule.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/add-recipe', {
    templateUrl: 'recipes/add-recipe-form.html',
    controller: 'PostRecipesCtrl'
  });
}])

myModule.controller('PostRecipesCtrl', ['$scope', 'fileUpload', function($scope, fileUpload){
            $scope.uploadFile = function() {
               var file = $scope.myFile;
               console.log($scope.name)
               // console.log(param)
               // console.log('file is ' );
               // console.dir(file);
               
               var uploadUrl = "http://localhost:3000/recipes.json";
               fileUpload.uploadFileToUrl($scope.name, $scope.instructions, file, uploadUrl);
            };
         }]);


myModule.directive('fileModel', ['$parse', function ($parse) {
            return {
               restrict: 'A',
               link: function(scope, element, attrs) {
                  var model = $parse(attrs.fileModel);
                  var modelSetter = model.assign;
                  
                  element.bind('change', function(){
                     scope.$apply(function(){
                        modelSetter(scope, element[0].files[0]);
                     });
                  });
               }
            };
         }]);
      
         myModule.service('fileUpload', ['$http', '$location', function ($http, $location) {
            this.uploadFileToUrl = function(name, instructions, file, uploadUrl){
               console.log(file);
               var image = file
               var param = new FormData();
               param.append('avatar', file);
               param.append('name', name);
               param.append('instructions', instructions);

               console.log(param)		
               	// var param = JSON.stringify({{name, instructions, file})
               // $http.post(uploadUrl, param)

               $http.post(uploadUrl, param, {
                  transformRequest: angular.identity,
                  headers: {'Content-Type': undefined}
               })
            
               .success(function(){

               })
            
               .error(function(){

               });

               $location.path('/recipes')
            }
         }]);
      
         
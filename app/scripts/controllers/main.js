'use strict';

angular.module('rbcgApp')
  .controller('MainCtrl', function ($scope, $http) {

  	$scope.getBC = function(category, counter) {
      console.log('getrandomBC', category);
      $http.get('../data/'+category+'.json').success(function(data) {
        if(counter){
          $scope.counter = $scope.counter * data.length;
          console.log('Cases', $scope.counter);
        }
        $scope[category] = data[Math.floor(Math.random() * data.length)];
      });
    }
    $scope.countBC = function() {
      $scope.counter = true;
      $scope.getBC('business_models',$scope.counter);
      $scope.getBC('targets',$scope.counter);
      $scope.getBC('things',$scope.counter);
      $scope.getBC('pos',$scope.counter);
    }

    $scope.randomBC = function() {
      $scope.getBC('business_models');
      $scope.getBC('targets');
      $scope.getBC('things');
      $scope.getBC('pos');
      $scope.countBC();
    }
    var init = function () {
      $scope.randomBC();
    };
    
    init();

  });


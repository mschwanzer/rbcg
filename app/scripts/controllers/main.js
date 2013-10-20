'use strict';

angular.module('rbcgApp')
  .controller('MainCtrl', function ($scope, $http) {

  	$scope.getBC = function(category, counter) {
      //console.log('getrandomBC', category);
      $http.get('data/'+category+'.json').success(function(data) {
        if(counter){
          $scope.counter = $scope.counter * data.length;
          //console.log('Cases', $scope.counter);
        }
        var item = data[Math.floor(Math.random() * data.length)];
        $scope[category] = item;
        $http.jsonp('http://en.wikipedia.org/w/api.php?action=query&prop=info&inprop=url&format=json&titles='+item.title+'&callback=JSON_CALLBACK&redirects').success(function(data, status, headers, config) {
          for (var i in data.query.pages){
            $scope[category].wiki = data.query.pages[i].fullurl;
          }
        }).
        error(function(data, status, headers, config) {
            alert("ERROR: Could not get data.");
        }); 
      })
      
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
      
    }
    var init = function () {
      $scope.randomBC();
      $scope.countBC();
    };
    
    init();

  });


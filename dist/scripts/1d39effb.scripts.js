"use strict";angular.module("rbcgApp",["ngCookies","ngResource","ngSanitize"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl"}).otherwise({redirectTo:"/"})}]),angular.module("rbcgApp").controller("MainCtrl",["$scope","$http",function(a,b){a.getBC=function(c,d){b.get("data/"+c+".json").success(function(e){d&&(a.counter=a.counter*e.length);var f=e[Math.floor(Math.random()*e.length)];a[c]=f,b.jsonp("http://en.wikipedia.org/w/api.php?action=query&prop=info&inprop=url&format=json&titles="+f.title+"&callback=JSON_CALLBACK&redirects").success(function(b){for(var d in b.query.pages)a[c].wiki=b.query.pages[d].fullurl}).error(function(){alert("ERROR: Could not get data.")})})},a.countBC=function(){a.counter=!0,a.getBC("business_models",a.counter),a.getBC("targets",a.counter),a.getBC("things",a.counter),a.getBC("pos",a.counter)},a.randomBC=function(){a.getBC("business_models"),a.getBC("targets"),a.getBC("things"),a.getBC("pos")};var c=function(){a.randomBC(),a.countBC()};c()}]);
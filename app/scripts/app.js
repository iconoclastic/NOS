'use strict';

/**
 * @ngdoc overview
 * @name namesonstuffApp
 * @description
 * # namesonstuffApp
 *
 * Main module of the application.
 */
angular
  .module('namesonstuffApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider, $locationProvider) {
    $locationProvider.html5Mode(true);
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/step2', {
        templateUrl: 'views/step2.html',
        controller: 'Step2Ctrl',
        controllerAs: 'step2'
      })
      .when('/step3', {
        templateUrl: 'views/step3.html',
        controller: 'Step3Ctrl',
        controllerAs: 'step3'
      })
      .when('/step4', {
        templateUrl: 'views/step4.html',
        controller: 'Step4Ctrl',
        controllerAs: 'step4'
      })
      .when('/step5', {
        templateUrl: 'views/step5.html',
        controller: 'Step5Ctrl',
        controllerAs: 'step5'
      })
      .when('/step6', {
        templateUrl: 'views/step6.html',
        controller: 'Step6Ctrl',
        controllerAs: 'step6'
      })                    
      .otherwise({
        redirectTo: '/'
      });
  })
  .controller('IndexCtrl', ['$scope', '$location', function($scope, $location) {
    $scope.currentPage = $location.path();
    $scope.PrevWatcher = false;
    $scope.NextWatcher = false;
    $scope.NextPageCalculator = function() {
      if ($location.path() === "/") {
        $scope.NextWatcher = false;
        return "/step2";
      } else if ($location.path() === "/step2") {
        $scope.NextWatcher = false;
        return "/step3";
      } else if ($location.path() === "/step3") {
        $scope.NextWatcher = false;
        return "/step4";
      } else if ($location.path() === "/step4") {
        $scope.NextWatcher = false;
        return "/step5";
      } else if ($location.path()=== "/step5") {
        $scope.NextWatcher = false;
        return "/step6";
      } else if ($location.path() === "/step6") {
        $scope.NextWatcher = true;
        return false;
      }
    };
    $scope.PrevPageCalculator = function() {
      if ($location.path() === "/") {
        $scope.PrevWatcher = true;
        return false;
      } else if ($location.path() === "/step2") {
        $scope.PrevWatcher = false;
        return "/";
      } else if ($location.path() === "/step3") {
        $scope.PrevWatcher = false;
        return "/step2";
      } else if ($location.path() === "/step4") {
        $scope.PrevWatcher = false;
        return "/step3";
      } else if ($location.path()=== "/step5") {
        $scope.PrevWatcher = "";
        return "/step4";
      } else if ($location.path() === "/step6") {
        $scope.PrevWatcher = false;
        return "/step5";
      }
    };    
    $scope.pageController = function (currentStep) {
      return ( $location.path() === currentStep) ? true : false;
    };

  }]);
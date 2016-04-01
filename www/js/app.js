//------------------------------------------------------------------------------
angular.module('starter', ['ionic','starter.controllers', 'starter.services'])
//------------------------------------------------------------------------------
.config(function($stateProvider, $urlRouterProvider) {

  $stateProvider.state('tab', {
    url: '/tab',
    abstract: true,
    templateUrl: 'templates/tabs.html'
  });

  $stateProvider.state('tab.home', {
    url: '/home',
    views: {
      'tab-home': {
        templateUrl: 'templates/tab-home.html',
        controller: 'HomeCtrl'
      }
    }
  });

  $stateProvider.state('tab.info', {
    url: '/info',
    views: {
      'tab-info': {
        templateUrl: 'templates/tab-info.html',
        controller: 'InfoCtrl'
      }
    }
  });

  $urlRouterProvider.otherwise('/tab/home');

})
//------------------------------------------------------------------------------

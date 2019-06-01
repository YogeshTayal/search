'use strict';

/**
 * @ngdoc overview
 * @name searchApp
 * @description
 * # searchApp
 *
 * Main module of the application.
 */
angular
  .module('searchApp', [
    'ngRoute'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

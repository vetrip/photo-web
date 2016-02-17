'use strict';

/**
 * @ngdoc overview
 * @name photoWebApp
 * @description
 * # photoWebApp
 *
 * Main module of the application.
 */
angular
  .module('photoWebApp', [
    'ngAnimate',
    'photoService',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch',
    'ui.bootstrap'])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/', {
        templateUrl: 'views/main.html',
        controller: 'PhotoCtrl',
        controllerAs: 'photo'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/'
      });
  });

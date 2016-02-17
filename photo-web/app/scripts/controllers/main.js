'use strict';

/**
 * @ngdoc function
 * @name photoWebApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the photoWebApp
 */
angular.module('photoWebApp')
  .controller('MainCtrl', function ($scope) {
    $scope.photos = ['Photo 1','Photo 2','Photo 3'];
  });

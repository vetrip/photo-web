'use strict';

angular.module('photoWebApp').controller('PhotoCtrl',['$scope','Photo',function($scope,Photo){
	$scope.albums = [];
	
	getAlbums();
	
	function getAlbums(){
		Photo.getAlbums().success(function(data){
			$scope.albums = data;
		}).error(function(){
			
		})
	}
	
	$scope.getPhotos = function (albumId){
		Photo.getPhotos(albumId).success(function(data){
			$scope.photos = data;
		}).error(function(){
			
		})
	}
	
	
}]);
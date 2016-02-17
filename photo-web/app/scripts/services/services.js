'use strict';

var photoService = angular.module('photoService',[]);

photoService.factory('Photo',function($http){
	var baseURL = 'http://localhost:8080/photo-blog-service/rest/service';
	return {
		getAlbums:function(){
			return $http.get(baseURL+'/albums');
		},
		getPhotos:function(albumId){
			return $http.get(baseURL+'/album/'+albumId);
		}
	};
})
'use strict';
angular.module('ngArt')
	.factory('PostsSvc', function($resource) {
		return $resource('api/collections/kat5'),
			{},
			{
				query: { method: 'GET', isArray: true },
				create: { method: 'POST'}
			});
	})
	.factory('PostSvc', function($resource) {
		return $resource('api/collections/kat5/:id'),
			{
				id: '@_id'
			},
			{
				show: { method: 'GET'},
				edit: { method: 'PUT'},
				delete: { method: 'DELETE'}
			}
			
	});
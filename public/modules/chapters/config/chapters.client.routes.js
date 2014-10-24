'use strict';

//Setting up route
angular.module('chapters').config(['$stateProvider',
	function($stateProvider) {
		// Chapters state routing
		$stateProvider.
		state('createChapter', {
			url: '/create',
			templateUrl: 'modules/chapters/views/create-chapter.client.view.html'
		}).
		state('chapter1', {
			url: '/:chapterId/ch1',
			templateUrl: 'modules/chapters/views/first-chapter.client.view.html'
		}).
		state('chapter2', {
			url: '/:chapterId/ch2',
			templateUrl: 'modules/chapters/views/second-chapter.client.view.html'
		}).
		state('chapter3', {
			url: '/:chapterId/ch3',
			templateUrl: 'modules/chapters/views/third-chapter.client.view.html'
		}).
		state('chapter4', {
			url: '/:chapterId/ch4',
			templateUrl: 'modules/chapters/views/fourth-chapter.client.view.html'
		}).
		state('chapter5', {
			url: '/:chapterId/ch5',
			templateUrl: 'modules/chapters/views/fifth-chapter.client.view.html'
		}).
		state('final', {
			url: '/:chapterId/final',
			templateUrl: 'modules/chapters/views/final-page.client.view.html'
		});
	}
]);
'use strict';

// Chapters controller
angular.module('chapters').controller('ChaptersController', ['$scope', '$stateParams', '$location', 'Authentication', 'Chapters', 'Mailer',
	function($scope, $stateParams, $location, Authentication, Chapters, Mailer ) {
		$scope.chapterId = $stateParams.chapterId;

	$scope.chapter = Chapters.get({ 
		chapterId: $stateParams.chapterId
	}, function(res) {
		$scope.name = res.name;
		$scope.company = res.company;
		$scope.competitor = res.competitor;
		$scope.compCompany = res.compCompany;
		$scope.friend = res.friend;
		$scope.staff = res.staff;
		$scope.firstOption = res.firstOption;
		$scope.secondOption = res.secondOption;
		$scope.thirdOption = res.thirdOption;
		$scope.companySolution = res.companySolution;
		$scope.friendSolution = res.friendSolution;
		$scope.generatorSolution = res.generatorSolution;
		$scope.professionalSolution = res.professionalSolution;
	});


		$scope.authentication = Authentication;

		// Create new Chapter
		$scope.create = function() {
			// Create new Chapter object			
			var chapter = new Chapters ({
				name: this.name
			});

			// Redirect after save
			chapter.$save(function(response) {
				localStorage.setItem('chapterId', response._id);
				$location.path(response._id + '/ch1');

				// Clear form fields
				$scope.name = '';
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		// Remove existing Chapter
		$scope.remove = function( chapter ) {
			if ( chapter ) { chapter.$remove();

				for (var i in $scope.chapters ) {
					if ($scope.chapters [i] === chapter ) {
						$scope.chapters.splice(i, 1);
					}
				}
			} else {
				$scope.chapter.$remove(function() {
					$location.path('chapters');
				});
			}
		};

		// Update existing Chapter
		$scope.addCh1 = function() {
			var chapter = $scope.chapter;
			chapter.competitor = this.competitor;
			chapter.compCompany = this.compCompany;

			chapter.$update(function() {
				console.log(chapter);
				$location.path($stateParams.chapterId + '/ch2');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};

		$scope.addCh2 = function() {
			var chapter = $scope.chapter;
			chapter.company = $scope.company;
			chapter.friend = $scope.friend;
			chapter.staff = $scope.staff;
			chapter.companySolution = $scope.companySolution;
			if ($scope.companySolution === 'friend') {
				chapter.friendSolution = true;
				chapter.professionalSolution = false;
				chapter.generatorSolution = false;
			} else if ($scope.companySolution === 'professional') {
				chapter.professionalSolution = true;
				chapter.generatorSolution = false;
				chapter.friendSolution = false;
			} else {
				chapter.generatorSolution = true;
				chapter.professionalSolution = false;
				chapter.friendSolution = false;
			}

			chapter.$update(function() {
				console.log(chapter);
				$location.path($stateParams.chapterId + '/ch3');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};


		$scope.addCh4 = function() {
			var chapter = $scope.chapter;
			chapter.firstOption = $scope.firstOption;
			chapter.secondOption = $scope.secondOption;
			chapter.thirdOption = $scope.thirdOption;

			chapter.$update(function() {
				console.log(chapter);
				$location.path($stateParams.chapterId + '/ch5');
			}, function(errorResponse) {
				$scope.error = errorResponse.data.message;
			});
		};


		$scope.sendEmail = function(req) {
			Mailer.sendEmail(req);
		};

		// Find a list of Chapters
		$scope.find = function() {
			$scope.chapters = Chapters.query();
		};

		// Find existing Chapter
		$scope.findOne = function() {
			$scope.chapter = Chapters.get({ 
				chapterId: $stateParams.chapterId
			});
		};
	}
]);
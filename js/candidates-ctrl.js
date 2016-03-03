angular.module('PrezApp').controller('CandidatesCtrl', function($scope, $firebaseArray, candidatesRef) {

	$scope.candidates = $firebaseArray(candidatesRef);

	$scope.addCandidate = function() {
		$scope.candidates.$add({
			name: $scope.name,
			bio: $scope.bio
		});
		$scope.name = null;
		$scope.bio = null;
	};
});
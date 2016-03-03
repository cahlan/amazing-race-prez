angular.module('PrezApp').controller('CandidateDiscussionsCtrl', function($scope, $firebaseArray, $firebaseObject, candidateRef) {

	$scope.candidate = $firebaseObject(candidateRef);

	$scope.discussions = $firebaseArray(candidateRef.child('discussions'));

	$scope.addComment = function() {
		$scope.discussions.$add({
			text: $scope.comment,
			added: new Date().getTime(),
			username: $scope.username
		});
	}

});
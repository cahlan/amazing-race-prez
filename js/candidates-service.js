angular.module('PrezApp').service('CandidatesService', function(Firebase) {
	this.getCandidates = function() {
		return new Firebase("https://amazing-prez-race.firebaseio.com/candidates");
	};
	this.getCandidate = function(candidateId) {
		return new Firebase("https://amazing-prez-race.firebaseio.com/candidates/"+candidateId);
	};
});

//https://amazing-prez-race.firebaseio.com

//{candidates:{}, discussion:{}}

//https://amazing-prez-race.firebaseio.com/candidates

//{}

//https://amazing-prez-race.firebaseio.com/discussions

//{}

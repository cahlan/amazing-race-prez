var app = angular.module('PrezApp', ['ui.router', 'firebase', 'angularMoment']);

app.config(function($stateProvider, $urlRouterProvider) {
	$stateProvider
	.state('home', {
		url: '/',
		templateUrl: '/templates/home.html'
	})
	.state('candidates', {
		url: '/candidates',
		templateUrl: '/templates/candidates.html',
		controller: 'CandidatesCtrl',
		resolve: {
			candidatesRef: function(CandidatesService) {
				return CandidatesService.getCandidates();
			}
		}
	})
	.state('candidate_discussion', {
		url: '/candidates/:id/discussions',
		templateUrl: '/templates/candidate-discussions.html',
		controller: 'CandidateDiscussionsCtrl',
		resolve: {
			candidateRef: function(CandidatesService, $stateParams) {
				return CandidatesService.getCandidate($stateParams.id);
			}
		}
	})
	.state('discussions', {
		url: '/discussions',
		templateUrl: '/templates/discussions.html'
	});

	$urlRouterProvider.otherwise('/');
});
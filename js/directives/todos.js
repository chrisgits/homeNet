// todos.js - traditionally named after directive name

angular.module('homeNet')
	.directive('todos', function() {
		return {
			templateUrl: 'templates/todos.html',
			replace: true
		};

	});

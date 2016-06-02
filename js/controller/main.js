//main.js
'use strict';

angular.module('homeNet')
	//main Controller
	.controller('mainCtrl', function($scope, dataService) {
    $scope.addTodo = function() {
      var todo = {name: "This is a new todo."};
      $scope.todos.unshift(todo);
      //unshift adds to beginning of array
      //push adds to end of array
    };

    dataService.getTodos(function(response) {
      //console.log(response.data);
      $scope.todos = response.data;
      });
  
    $scope.deleteTodo = function(todo, $index) {
      dataService.deleteTodo(todo);
      $scope.todos.splice($index, 1);
    };
  
    $scope.saveTodos = function(todo) {
      var filteredTodos = $scope.todos.filter(function(todo) { //iteration of array
        if(todo.edited) {
          return todo;
        }
      });
      dataService.saveTodos(filteredTodos);
    };

  });//mainCtrl
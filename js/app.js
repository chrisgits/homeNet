'use strict';
//instantiate homeNet module
//create controller within -- mainCtrl
//creates $scope to controller
angular.module('homeNet', [])
  //mainCtrl
  .controller('mainCtrl', function($scope, dataService) {
    $scope.addTodo = function() {
      var todo = {name: "This is a new todo."};
      $scope.todos.push(todo);
    };

    dataService.getTodos(function(response) {
      //console.log(response.data);
      $scope.todos = response.data;
      });
  
    $scope.deleteTodo = function(todo, $index) {
      dataService.deleteTodo(todo);
      $scope.todos.splice($index, 1);
    };
  
    $scope.saveTodo = function(todo) {
      dataService.saveTodo(todo);
    };

  })//mainCtrl
  
    .service('dataService', function($http) {
      this.getTodos = function(callback) {
          $http.get('mock/todos.json')
          .then(callback);
        };
      
      this.deleteTodo = function(todo){
        console.log("The " + todo.name + " task has been deleted!");
        //simulate delete from DB.
      };
      
      this.saveTodo = function(todo) {
        
      }
    }) //data service
    

;// homeNet module

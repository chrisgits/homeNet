//data.js
'use strict';

angular.module('homeNet')
	//Data Service
    .service('dataService', function($http) {
      this.getTodos = function(callback) {
          $http.get('mock/todos.json')
          .then(callback);
        };
      
      this.deleteTodo = function(todo){
        console.log("The " + todo.name + " task has been deleted!");
        //simulate delete from DB.
      };
      
      this.saveTodos = function(todos) {
        console.log(todos.length + " todos has been saved!");
        //simulate delete from DB.
      };

}); //data service
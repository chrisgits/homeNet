"use strict";angular.module("homeNet").service("dataService",function(e){this.getTodos=function(o){e.get("mock/todos.json").then(o)},this.deleteTodo=function(e){console.log("The "+e.name+" task has been deleted!")},this.saveTodo=function(e){console.log("The "+e.name+" task has been deleted!")}});
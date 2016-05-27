//instantiate homeNet module
//create controller within -- mainCtrl
//creates $scope to controller
angular.module('homeNet', [])
  //mainCtrl
  .controller('mainCtrl', function($scope) {
    $scope.learningNgChange = function() {
      console.log("An input Changed");
    };

    $scope.todos = [
      {"name": "clean the house"},
      {"name": "water the lawn"},
      {"name": "feed the dog"},
      {"name": "pay the bills"},
      {"name": "learn Angular"}
    ];

  })

;// homeNet module

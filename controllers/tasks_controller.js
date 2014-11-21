
myApp.controller('tasks_controller', function ($scope, $rootScope) {

    $scope.dummy = "dummytest";

    $scope.toDos = [

        {"todo_title": "Buy Milk"},
        {"todo_title": "Pick up bread"}

    ];



    $scope.addToDo = function(){

        $scope.toDos.push({todo_title:$scope.toDoTitle});
        $scope.toDoTitle = '';

    }


    $scope.removeToDo = function(){

        delete $scope.toDos[1];

    }



    $scope.remaining = function(){

        alert("Hello! I am an alert box!");

    }




});

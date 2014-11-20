
myApp.controller('tasks_controller', function ($scope, $rootScope) {

    $scope.dummy = "dummytest";

    $scope.toDos = [

        {"todo_title": "Buy Milk"},
        {"todo_title": "Pick up mom"}

    ];



    $scope.addToDo = function(){

        $scope.toDos.push({todo_title:$scope.toDoTitle});
        $scope.toDoTitle = '';

        /*alert("Hello! I am an alert box!");*/

    }


    $scope.removeToDo = function(){

        $scope.toDos.pop();



    }



    $scope.remaining = function(){

        alert("Hello! I am an alert box!");
    }




});

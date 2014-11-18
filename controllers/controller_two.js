
myApp.controller('controller_two', function ($scope, myService, $rootScope) {

    $scope.cars = {name:"PPPPP", city:"barcelona"};

    $scope.name = myService.casa;

    $scope.data = myService.loadData();

    $rootScope.dog = "perro";


});


myApp.controller('ajax_controller', function ($scope, myService, $rootScope) {

    $scope.data = myService.field1;

    var promise = myService.load();

    promise.then(function(data){

            $scope.max = data;
        },
        function(){

            console.log("problem");

        }



    );

    $rootScope.test = "HELLO";



});

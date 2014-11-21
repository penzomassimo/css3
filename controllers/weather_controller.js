
myApp.controller('weather_controller', function ($scope, myWeather, $rootScope) {


    var promise = myWeather.load();

    promise.then(function(data){

            $scope.max = data;
        },
        function(){

            console.log("problem");

        }



    );

    $rootScope.test = "HELLO";



});

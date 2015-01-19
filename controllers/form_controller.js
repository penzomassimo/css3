
myApp.controller('form_controller', function ($scope, $http, $q) {

    $scope.myForm = {};
    $scope.myForm.list = ["alma","massimo","isabella"];

    $scope.sendForm = function(){

        var deferred = $q.defer();
        var url = "http://127.0.0.1:8080/test/webresources/myresource/form";

        var datax = $scope.myForm;


        $http.post(url, datax).success(function(data){

                deferred.resolve(data);

            }

        ).error(function(data){

                deferred.reject(data);

            });

        return deferred.promise;

    }


});



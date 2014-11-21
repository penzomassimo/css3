/**
 * Created by massimo on 11/3/14.
 */

myApp.service('myWeather', function($http, $q){



    this.load = function(){


        var deferred = $q.defer();
        var url = "http://api.openweathermap.org/data/2.5/forecast/city?id=1851632&APPID=1111111111";

        $http.get(url).success(function(data, status){

                deferred.resolve(data);

            }

        ).error(function(data, status){

                deferred.reject(data);

            });

        return deferred.promise;

    }

});
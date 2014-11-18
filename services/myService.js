/**
 * Created by massimo on 11/3/14.
 */

myApp.service('myService', function($http){

    this.casa = "alma";

    /*this.people = {};*/



    $http.get('http://127.0.0.1:8080/zip/webresources/myresource/zipsearch?zipcode=10006').success(function(data){

        this.people = data;

    });

    return this;


});

var myApp = angular.module('myAppModule', ['ngRoute', 'ngAnimate', 'tc.chartjs']);

myApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/view1',
        {
            controller: 'controller_one',
            templateUrl: 'views/view1.html'
        })
        .when('/view2',
        {
            controller: 'controller_two',
            templateUrl: 'views/view2.html'
        })
        .when('/mailbox',
        {
            controller: 'controller_mailbox',
            templateUrl: 'views/mailbox.html'
        })
        .when('/calendar',
        {
            controller: 'controller_two',
            templateUrl: 'views/calendar.html'
        })
        .when('/charts',
        {
            controller: 'controller_charts',
            templateUrl: 'views/charts.html'
        })
        .when('/ajaxview',
        {
            controller: 'ajax_controller',
            templateUrl: 'views/ajaxview.html'
        })
        .when('/tasks',
        {
            controller: 'tasks_controller',
            templateUrl: 'views/tasks.html'
        })
        .when('/weather',
        {
            controller: 'weather_controller',
            templateUrl: 'views/weather.html'
        })
        .when('/form',
        {
            controller: 'form_controller',
            templateUrl: 'views/form.html'
        })
        .when('/balance',
        {
            controller: 'balance_controller',
            templateUrl: 'views/balance.html'
        })
        .when('/cart',
        {
            controller: 'cart_controller',
            templateUrl: 'views/cart.html'
        })
        .when('/svg',
        {
            controller: 'svg_controller',
            templateUrl: 'views/svgview.html'
        })


        .otherwise({redirectTo: '/view1'});

}

]);

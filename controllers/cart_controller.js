
myApp.controller('cart_controller', function ($scope, $rootScope, cartService) {

    $scope.products = [

        {"sku":"111", "name":"Apple", "description":"aaaaa", "price":"20", "qty":"2"},
        {"sku":"222", "name":"Banana", "description":"bbbbb", "price":"30", "qty":"2"},
        {"sku":"333", "name":"Orange", "description":"ccccc", "price":"40", "qty":"2"},
        {"sku":"444", "name":"Watermelon", "description":"ddddd", "price":"50", "qty":"2"},
        {"sku":"555", "name":"Pear", "description":"eeeee", "price":"60", "qty":"2"},
        {"sku":"666", "name":"Cucumber", "description":"fffff", "price":"70", "qty":"2"}

    ];


    $scope.cart = cartService.CART;


    $scope.addProductToCart = function(index){

        cartService.CART.push({"name": $scope.products[index].name, "description": $scope.products[index].description});

        /*$rootScope.cart.push({"name": $scope.products[index].name, "description": $scope.products[index].description});*/

    };



    $scope.removeProductFromCart = function(index){

        cartService.CART.splice(index,1);

    };




    $scope.calculateTotalInCart = function(){

        var total = 0;

        angular.forEach($scope.cart, function(item){

            total += item.price * item.qty;

        })

    };




});

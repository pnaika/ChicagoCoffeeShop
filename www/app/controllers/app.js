/**
 * Created by Prashanth on 5/14/2015.
 */

(function(){
    
    angular.module('myApp',['ngRoute','ngMessages','ngAnimate','ngResource','ui.bootstrap']);
    
    angular.module('myApp').config(moduleConfig);
    function moduleConfig($routeProvider) { 
        $routeProvider
            .when('/aboutUs', {
                templateUrl: 'views/aboutUs/aboutUs.html',
                controller: 'abs'
            })
            .when('/contactUs', {
                templateUrl: 'views/contactUs/contactUs.html',
                controller: 'cs'
            })
            .when('/ps', {
                templateUrl: 'views/ProductnService/ps.html',
                controller: 'ps'
            })
            .when('/signUp', {
                templateUrl: 'views/signUp.html',
                controller: 'fcrtl'
            })
            .when('/cart', {
                templateUrl: 'views/cart.html'
            })
            .when('/gallery', {
                templateUrl: 'views/gallery.html'
            })
            .when('/employee', {
                templateUrl: 'views/employeeDetails/employee.html',
                controller: 'empDetails'
            })
            .otherwise({
                redirectTo: '/aboutUs'
            });
    }
    
    angular.module('myApp').factory('employees',function($resource){
       return $resource('http://localhost:8080/ChicagoCoffeeShopBackEnd/chicagoCoffeeShop/employee',{},{
          query: {
              method:'GET', isArray:true 
          } 
       }); 
    });
    
    angular.module('myApp').factory('addCustomer',function($resource){
       return $resource('http://localhost:8080/ChicagoCoffeeShopBackEnd/chicagoCoffeeShop/users',{},{ 
           
       }); 
    });
      
})();

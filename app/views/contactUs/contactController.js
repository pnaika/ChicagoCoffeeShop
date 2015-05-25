/**
 * Created by Prashanth on 5/14/2015.
 */
(function(){
    angular.module('myApp').controller("cs",function($scope,addCustomer){

    $scope.ContactController = function () {
        
        $scope.addCust = new addCustomer();
        $scope.addCust = $scope.user;
        
        addCustomer.save($scope.addCust, function(){
            $scope.alerts = 
                { type: 'success', msg: 'Thank you, We will get back to you soon!!' }
            ;
            $scope.user ={};
        });
       
        console.log('contact controller');
    }});
})();

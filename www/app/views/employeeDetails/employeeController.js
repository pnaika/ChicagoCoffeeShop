/**
 * Created by Prashanth on 5/14/2015.
 */
(function(){

    angular.module('myApp').controller('empDetails',function($scope, employees){
        $scope.allemployees = employees.query();

        console.log('employee controller');
    }); 
})();

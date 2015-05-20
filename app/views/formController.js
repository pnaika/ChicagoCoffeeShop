/**
 * Created by Prashanth on 5/12/2015.
 */

(function(){

    angular.module('myApp', ['ngMessages']).controller('fcrtl', FormController);

    //angular.module('myApp')

    function FormController(){
        var fc = this;
        console.log('form Controller');
    }
})();

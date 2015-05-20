/**
 * Created by Prashanth on 5/14/2015.
 */

(function(){

    angular.module('myApp',['ngAnimate']).controller('slidCntrl', SlideController);

    function SlideController($scope){
           $scope.slides=[
               {image:'images/miscphotos/hotcoffee.jpg',
                description:''},
               {image:'images/miscphotos/beans1.jpg',
                description:''},
               {image:'images/miscphotos/5484208335_7281e9fffd_b.jpg',
                description:''},
               {image:'images/miscphotos/5970884485_e5ee84b84a_b.jpg',
                description:''},
               {image:'images/miscphotos/4180675282_54f8a4c1a5_b.jpg',
                description:''},
               {image:'images/miscphotos/8808069436_6324fea6bb_b.jpg',
                description:''},
               {image:'images/grid-cell-1256-1405413576-0.jpg',
                description:''}
           ];

        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };
    }


})()
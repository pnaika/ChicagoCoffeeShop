/**
 * Created by Prashanth on 5/14/2015.
 */

(function(){
    angular.module('myApp').controller('slidCntrl', SlideController);

    function SlideController($scope){
        $scope.slides=[
            {image:'images/miscphotos/hotcoffee.jpg',
                description:'Image 1'},
            {image:'images/miscphotos/beans1.jpg',
                description:'Image 2'},
            {image:'images/miscphotos/5484208335_7281e9fffd_b.jpg',
                description:'Image 3'},
            {image:'images/miscphotos/5970884485_e5ee84b84a_b.jpg',
                description:'Image 4'},
            {image:'images/miscphotos/4180675282_54f8a4c1a5_b.jpg',
                description:'Image 5'},
            {image:'images/miscphotos/8808069436_6324fea6bb_b.jpg',
                description:'Image 6'},
            {image:'images/grid-cell-1256-1405413576-0.jpg',
                description:'Image 7'}
        ];

        $scope.currentIndex = 0;

        $scope.setCurrentSlideIndex = function (index) {
            $scope.currentIndex = index;
        };

        $scope.isCurrentSlideIndex = function (index) {
            return $scope.currentIndex === index;
        };

        $scope.prevSlide = function () {
            $scope.currentIndex = ($scope.currentIndex < $scope.slides.length - 1) ? ++$scope.currentIndex : 0;
        };

        $scope.nextSlide = function () {
            $scope.currentIndex = ($scope.currentIndex > 0) ? --$scope.currentIndex : $scope.slides.length - 1;
            
        };

        console.log('slide Controller');
    }

})();
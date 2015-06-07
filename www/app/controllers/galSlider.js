/**
 * Created by Prashanth on 5/12/2015.
 */

(function(){


    angular.module('myApp').controller('slidCntrlGal', SlideControllerGal);

    function SlideControllerGal($scope){
        $scope.slides=[
            {image:'images/7999049109_aa0bf0aec5_b.jpg',
                description:'Image 2'},
            {image:'images/miscphotos/8046663120_1474462c7d_z.jpg',
                description:'Image 4'},
            {image:'images/miscphotos/beans1.jpg',
                description:'Image 5'},
            {image:'images/miscphotos/6358603967_71dae61c49_b.jpg',
                description:'Image 6'},
            {image:'images/grid-cell-1256-1405413576-0.jpg',
                description:'Image 7'},
            {image:'images/miscphotos/hotcoffee.jpg',
                description:'Image 8'},
            {image:'images/miscphotos/beans1.jpg',
                description:'Image 9'},
            {image:'images/miscphotos/5484208335_7281e9fffd_b.jpg',
                description:'Image 10'},
            {image:'images/miscphotos/5970884485_e5ee84b84a_b.jpg',
                description:'Image 11'},
            {image:'images/miscphotos/4180675282_54f8a4c1a5_b.jpg',
                description:'Image 12'},
            {image:'images/miscphotos/8808069436_6324fea6bb_b.jpg',
                description:'Image 13'},
            {image:'images/grid-cell-1256-1405413576-0.jpg',
                description:'Image 14'}
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

        console.log('Gallery slide Controller');
    }
})();
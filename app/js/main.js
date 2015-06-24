;(function (){

  'use strict';

  angular.module('mod', []).controller('ctrlr', ['$scope', function($scope){

    $scope.likes = [];


    $scope.add = function() {
      $scope.likes.push({});
    };

    $scope.count = function() {
      if ($scope.likes.length == 1) {
        $('#plural').html("like");
      } else {
        $('#plural').html("likes");
      }
      return $scope.likes.length;
    };


  }]);

}());

'use strict';

angular.module('amazonS3TestApp')
  .controller('MainCtrl', ["S3Service", function ($scope, S3Service) {
    $scope.awesomeThings = [
      'HTML5 Boilerplate',
      'AngularJS',
      'Karma'
    ];
  }]);

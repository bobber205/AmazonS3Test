'use strict';

angular.module('amazonS3TestApp')
  .controller('MainCtrl', ["$scope", "S3Service", function ($scope, S3Service) {
    	var files = S3Service.getAllFileObjects();

    	files.then(function(objects) {
    		//what objects are there???
    		console.log("File List:", objects);
    		$scope.fileList = objects;
    	});

    	$scope.fileList = [{
    		name: "Loading...",
    		url: "http://www.google.com"
    	}]
  }]);

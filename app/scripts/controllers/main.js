'use strict';

angular.module('amazonS3TestApp')
    .controller('MainCtrl', ["$scope", "S3Service", "$modal",
        function($scope, S3Service, $modal) {
            var files = S3Service.getAllFileObjects();

            files.then(function(objects) {
                //what objects are there???
                console.log("File List:", objects);
                $scope.fileList = objects;
            });

            $scope.fileList = [{
                name: "Loading...",
                url: "http://www.whoaIamstilloading.com"
            }];

            $scope.viewImage = function(imageObject) {
                console.log("viewing...", imageObject, $modal);
                $modal.open({
                    templateUrl: 'views/view.html',
                    controller: "ViewController",
                    resolve: {
                        items: function() {
                            return imageObject;
                        }
                    }
                });
            };
        }
    ])
    .controller('ViewController', ["$scope", "S3Service", "$modal",
        function($scope, S3Service, $modal) {
            console.log("Viewcontroller");
        }
    ]);
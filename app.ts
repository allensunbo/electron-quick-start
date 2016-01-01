// /// <reference path="typings/tsd.d.ts" />
var angular:ng.IAngularStatic = require('angular');

angular.module('app', [])
  .controller('MainCtrl', function($scope, $http) {
    $scope.submit = function() {
      $http.get('http://localhost:4000')
        .then(function(response) {
          $scope.message = response.data;
        });

    }

  });

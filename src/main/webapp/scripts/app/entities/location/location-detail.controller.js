'use strict';

angular.module('testApp')
    .controller('LocationDetailController', function ($scope, $rootScope, $stateParams, entity, Location) {
        $scope.location = entity;
        $scope.load = function (id) {
            Location.get({id: id}, function(result) {
                $scope.location = result;
            });
        };
        var unsubscribe = $rootScope.$on('testApp:locationUpdate', function(event, result) {
            $scope.location = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });

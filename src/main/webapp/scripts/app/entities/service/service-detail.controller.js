'use strict';

angular.module('testApp')
    .controller('ServiceDetailController', function ($scope, $rootScope, $stateParams, entity, Service, Space) {
        $scope.service = entity;
        $scope.load = function (id) {
            Service.get({id: id}, function(result) {
                $scope.service = result;
            });
        };
        var unsubscribe = $rootScope.$on('testApp:serviceUpdate', function(event, result) {
            $scope.service = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });

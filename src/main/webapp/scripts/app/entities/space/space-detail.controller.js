'use strict';

angular.module('testApp')
    .controller('SpaceDetailController', function ($scope, $rootScope, $stateParams, entity, Space, Location, Service, Image, Favorite, Message, User) {
        $scope.space = entity;
        $scope.load = function (id) {
            Space.get({id: id}, function(result) {
                $scope.space = result;
            });
        };
        var unsubscribe = $rootScope.$on('testApp:spaceUpdate', function(event, result) {
            $scope.space = result;
        });
        $scope.$on('$destroy', unsubscribe);

    });

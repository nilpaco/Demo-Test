'use strict';

angular.module('testApp')
    .factory('SpaceSearch', function ($resource) {
        return $resource('api/_search/spaces/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });

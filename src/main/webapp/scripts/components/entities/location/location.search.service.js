'use strict';

angular.module('testApp')
    .factory('LocationSearch', function ($resource) {
        return $resource('api/_search/locations/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });

'use strict';

angular.module('testApp')
    .factory('ImageSearch', function ($resource) {
        return $resource('api/_search/images/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });

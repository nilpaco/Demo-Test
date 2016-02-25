'use strict';

angular.module('testApp')
    .factory('FavoriteSearch', function ($resource) {
        return $resource('api/_search/favorites/:query', {}, {
            'query': { method: 'GET', isArray: true}
        });
    });

/**
 * Created by a689638 on 4/6/2016.
 */

(function () {
    'use strict';
    angular.module('routerApp').service('CurrentEntity', ['$q', 'DriveFileService', function ($q, DriveFileService) {
        this.entity = {};
        this.entityType = null;
    }]);

})();
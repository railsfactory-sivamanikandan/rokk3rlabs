/**
  * @ngdoc module
  * @name root
  **/
(function() {
  'use strict';

  angular
    .module('root', [
      'dashboard'
    ])
    .config(_configRoot);

    _configRoot.$inject = ['$locationProvider'];
    function _configRoot ($locationProvider) {
      $locationProvider.html5Mode(true);
      $locationProvider.hashPrefix('!');
    }
})();

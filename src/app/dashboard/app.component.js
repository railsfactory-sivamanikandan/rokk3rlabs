
 (function() {
  'use strict';

  angular
  .module('dashboard')
  .component('app', {
    templateUrl: './app/dashboard/app.html',
    controller: 'AppController'
  })
  .config(_configApp);

  _configApp.$inject = ['$stateProvider'];
  function _configApp ($stateProvider) {

    $stateProvider
      .state('app', {
        component: 'app',
        url:'/'
      });
  }
})();

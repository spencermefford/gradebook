(function() {
  'use strict';

  angular.module('gradebookApp', [
    'ngMaterial',
    'ui.router'
  ])
    .run(function($rootScope, $log) {
      $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        $log.error('$stateChangeError (toState: %s): %o', toState.name, error);
      });
    });
})();
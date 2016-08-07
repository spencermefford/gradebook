(function() {
  'use strict';

  angular.module('gradebookApp', [
    'ngMaterial',
    'ui.router'
  ])
    .run(function($rootScope, $log, $mdToast) {
      $rootScope.$on('$stateChangeError', function(event, toState, toParams, fromState, fromParams, error) {
        $log.error('$stateChangeError (toState: %s): %o', toState.name, error);

        if (_.get(error, 'status') === -1) { // No API response...
          $mdToast.show(
            $mdToast.simple()
              .textContent('API may be unavailable')
              .position('bottom right')
              .hideDelay(0)
          );
        }
      });
    });
})();
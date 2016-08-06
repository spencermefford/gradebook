(function() {
  'use strict';

  angular.module('gradebookApp')
    .config(function($mdThemingProvider) {
      $mdThemingProvider.theme('default')
        .primaryPalette('blue')
        .accentPalette('orange');
    });
})();
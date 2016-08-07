(function() {
  'use strict';

  var gbZeroState = {
    template: '<div ng-transclude></div>',
    transclude: true
  };

  angular.module('gradebookApp')
    .component('gbZeroState', gbZeroState);
})();
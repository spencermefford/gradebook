(function() {
  'use strict';

  angular.module('gradebookApp')
    .directive('gbUpdateOnEnter', gbUpdateOnEnter);

  function gbUpdateOnEnter() {
    return {
      restrict: 'A',
      require: 'ngModel',
      link: gbUpdateOnEnterLnk
    };
  }

  function gbUpdateOnEnterLnk($scope, $element, $attrs, $ctrl) {
    $element.bind('keyup', function(ev) {
      if (ev.keyCode == 13) {
        $ctrl.$commitViewValue();
        $scope.$apply($ctrl.$setTouched);
      }
    });
  }
})();
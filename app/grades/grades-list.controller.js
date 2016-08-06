(function() {
  'use strict';

  angular.module('gradebookApp')
    .controller('GradesListCtrl', GradesListCtrl);

  function GradesListCtrl(GradeService) {
    var ctrl = this;

    ctrl.GradeService = GradeService;
  }
})();
(function() {
  'use strict';

  angular.module('gradebookApp')
    .controller('GradesListCtrl', GradesListCtrl);

  function GradesListCtrl($mdDialog, GradeService) {
    var ctrl = this;

    ctrl.GradeService = GradeService;
    ctrl.newStudent = newStudent;
    ctrl.removeStudent = removeStudent;

    /**
     * Create a new student.
     * @param {Event} ev
     */
    function newStudent(ev) {
      var confirm = $mdDialog.prompt()
        .title('What is your student\'s name?')
        .placeholder('John or Jane Doe')
        .targetEvent(ev)
        .ok('Done')
        .cancel('Cancel');

      $mdDialog.show(confirm)
        .then(function(result) {
          GradeService.create(result, null);
        });
    }

    function removeStudent(ev, id) {
      var confirm = $mdDialog.confirm()
        .title('Are you sure you want to delete this student?')
        .targetEvent(ev)
        .ok('Confirm')
        .cancel('Cancel');

      $mdDialog.show(confirm)
        .then(function() {
          GradeService.remove(id);
        });
    }
  }
})();
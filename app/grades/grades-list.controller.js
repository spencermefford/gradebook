(function() {
  'use strict';

  angular.module('gradebookApp')
    .controller('GradesListCtrl', GradesListCtrl);

  function GradesListCtrl($mdDialog, $mdToast, GradeService) {
    var ctrl = this;

    ctrl.GradeService = GradeService;
    ctrl.newStudent = newStudent;
    ctrl.updateStudent = updateStudent;
    ctrl.removeStudent = removeStudent;

    /**
     * Create a new student.
     * @param {Event} ev
     */
    function newStudent(ev) {
      // TODO: Add form validation to dialog
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

    /**
     * Update the grade.
     * @param {Object} grade Grade.
     */
    function updateStudent(grade) {
      if (_.isPlainObject(grade) && !_.isEmpty(grade)) {
        GradeService.update(grade.id, grade)
          .then(function() {
            $mdToast.show(
              $mdToast.simple()
                .textContent('Saved Changes')
                .position('bottom right')
                .hideDelay(3000)
            );
          });
      }
    }

    /**
     * Remove the student.
     * @param {Object} grade Grade.
     */
    function removeStudent(grade) {
      if (_.isPlainObject(grade) && !_.isEmpty(grade)) {
        GradeService.remove(grade.id)
          .then(function() {
            $mdToast.show(
              $mdToast.simple()
                .textContent('Record Deleted')
                .position('bottom right')
                .hideDelay(3000)
            );
          });
      }
    }
  }
})();
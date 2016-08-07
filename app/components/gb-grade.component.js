(function() {
  'use strict';

  var gbGrade = {
    templateUrl: 'components/gb-grade.html',
    bindings: {
      grade: '<',
      onUpdate: '&',
      onDelete: '&'
    },
    controller: GbGradeCtrl
  };

  angular.module('gradebookApp')
    .component('gbGrade', gbGrade);

  function GbGradeCtrl($mdDialog) {
    var ctrl = this;

    ctrl.update = update;
    ctrl.remove = remove;

    /**
     * Update the grade.
     * @param {Object} grade
     */
    function update(grade) {
      ctrl.onUpdate({$grade: grade}); // Execute the onUpdate function
    }

    /**
     * Remove a grade.
     * @param {Event} ev Event.
     * @param {Object} grade Grade.
     */
    function remove(ev, grade) {
      var confirm = $mdDialog.confirm()
        .title('Are you sure you want to delete this student?')
        .targetEvent(ev)
        .ok('Confirm')
        .cancel('Cancel');

      $mdDialog.show(confirm)
        .then(function() {
          ctrl.onDelete({$grade: grade}); // Execute the onDelete function
        });
    }
  }
})();
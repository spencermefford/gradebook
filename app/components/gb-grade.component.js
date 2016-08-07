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
     */
    function update() {
      ctrl.onUpdate({$grade: ctrl.grade}); // Execute the onUpdate function
    }

    /**
     * Remove a grade.
     * @param {Event} ev Event.
     */
    function remove(ev) {
      var confirm = $mdDialog.confirm()
        .title('Are you sure you want to delete this student?')
        .targetEvent(ev)
        .ok('Confirm')
        .cancel('Cancel');

      $mdDialog.show(confirm)
        .then(function() {
          ctrl.onDelete({$grade: ctrl.grade}); // Execute the onDelete function
        });
    }
  }
})();
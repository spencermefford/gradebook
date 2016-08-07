(function() {
  'use strict';

  angular.module('gradebookApp')
    .config(function($stateProvider, $urlRouterProvider) {
      $urlRouterProvider.otherwise(function($injector) {
        var $state = $injector.get('$state');

        $state.go('grades.list');
      });

      $stateProvider
        .state('grades', {
          url: '/grades',
          templateUrl: 'grades/grades.html',
          abstract: true
        })
        .state('grades.list', {
          url: '/list',
          templateUrl: 'grades/grades-list.html',
          controller: 'GradesListCtrl',
          controllerAs: 'ctrl',
          resolve: {
            grades: function(GradeService) {
              return GradeService.fetch();
            }
          }
        });
    });

})();
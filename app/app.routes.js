'use strict';

angular.module('gradebookApp')

  .config(function($stateProvider, $urlRouterProvider) {
    $urlRouterProvider.otherwise('/grades/list');

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

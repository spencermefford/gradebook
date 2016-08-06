(function() {
  'use strict';

  var gbStatistic = {
    templateUrl: 'components/gb-statistic.html',
    bindings: {
      label: '@',
      stat: '<'
    },
    controller: GbStatisticCtrl
  };

  angular.module('gradebookApp')
    .component('gbStatistic', gbStatistic);

  function GbStatisticCtrl() {
    var ctrl = this;
  }
})();
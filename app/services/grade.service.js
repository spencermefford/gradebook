(function() {
  'use strict';

  angular.module('gradebookApp')
    .service('GradeService', GradeService);

  function GradeService($http, API) {
    var service = this;

    service.data = {
      grades: []
    };

    service.fetch = fetch;
    service.remove = remove;

    /**
     * Fetch all grades.
     * @returns {Promise}
     */
    function fetch() {
      return $http.get(API + '/grades')
        .then(function(resp) {
          service.data.grades = resp.data;

          return resp.data;
        });
    }

    /**
     * Remove Grade by ID.
     * @param {number} id
     * @returns {Promise}
     */
    function remove(id) {
      console.log(id);
      return $http.delete(API + '/grades/' + id)
        .then(function(resp) {
          var found = _.find(service.data.grades, ['id', id]);

          _.pull(service.data.grades, found);

          return resp.data;
        });
    }
  }
})();
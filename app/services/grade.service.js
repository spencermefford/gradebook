(function() {
  'use strict';

  angular.module('gradebookApp')
    .service('GradeService', GradeService);

  function GradeService($http, API) {
    var service = this;
    var API_GRADES = API + '/grades';

    service.data = {
      grades: []
    };

    service.fetch = fetch;
    service.create = create;
    service.update = update;
    service.remove = remove;
    service.minScore = minScore;
    service.maxScore = maxScore;
    service.averageScore = averageScore;

    /**
     * Fetch all Grades.
     * @returns {Promise}
     */
    function fetch() {
      return $http.get(API_GRADES)
        .then(function(resp) {
          service.data.grades = resp.data;

          return resp.data;
        });
    }

    /**
     * Create a Grade.
     * @param {string} name Student name.
     * @param {number} score Test score.
     * @returns {Promise}
     */
    function create(name, score) {
      var data = {
        name: name,
        score: score
      };

      return $http.post(API_GRADES, data)
        .then(function(resp) {
          console.log(resp);

          service.data.grades.push(resp.data);

          return resp.data;
        });
    }

    /**
     * Update the Grade with the given ID.
     * @param {number} id Grade ID.
     * @param {Object} obj Grade object.
     * @returns {Promise}
     */
    function update(id, obj) {
      return $http.put(API_GRADES + '/' + id, obj)
        .then(function(resp) {
          return resp.data;
        });
    }

    /**
     * Remove Grade by ID.
     * @param {number} id Grade ID.
     * @returns {Promise}
     */
    function remove(id) {
      console.log(id);
      return $http.delete(API_GRADES + '/' + id)
        .then(function(resp) {
          var found = _.find(service.data.grades, ['id', id]);

          _.pull(service.data.grades, found);

          return resp.data;
        });
    }

    function minScore(grades) { // TODO: Unit tests
      return 1;
    }

    function maxScore(grades) { // TODO: Unit tests
      return 2;
    }

    function averageScore(grades) { // TODO: Unit tests
      return 3;
    }
  }
})();
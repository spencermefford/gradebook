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
    service.meanScore = meanScore;

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
      return $http.delete(API_GRADES + '/' + id)
        .then(function(resp) {
          var found = _.find(service.data.grades, ['id', id]);

          _.pull(service.data.grades, found);

          return resp.data;
        });
    }

    /**
     * Get the min score from all grades.
     * @param {Array} grades
     * @returns {number} Min score.
     */
    function minScore(grades) { // TODO: Unit tests
      var min = _.minBy(_filteredScores(grades), 'score');

      return min && min.score || 0;
    }

    /**
     * Get the max score from all grades.
     * @param {Array} grades
     * @returns {number} Max score.
     */
    function maxScore(grades) { // TODO: Unit tests
      var max = _.maxBy(_filteredScores(grades), 'score');

      return max && max.score || 0;
    }

    /**
     * Get the average score from all grades.
     * @param {Array} grades
     * @returns {number} Average score.
     */
    function meanScore(grades) { // TODO: Unit tests
      return _.meanBy(_filteredScores(grades), 'score') || 0;
    }

    /**
     * Filter scores to only numeric values. This way empties don't throw our values off.
     * @param {Array} grades
     * @returns {Array} Array of filtered scores.
     * @private
     */
    function _filteredScores(grades) {
      return _.filter(grades, function(grade) {
        return _.isNumber(grade.score);
      });
    }
  }
})();
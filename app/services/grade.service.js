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
    service._filteredScores = _filteredScores;

    /**
     * Fetch all Grades.
     * @returns {Promise}
     */
    function fetch() { // TODO: Unit tests
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
    function create(name, score) { // TODO: Unit tests
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
    function update(id, obj) { // TODO: Unit tests
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
    function remove(id) { // TODO: Unit tests
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
    function minScore(grades) {
      var scores = _filteredScores(grades);
      var min = _.min(scores);

      return min || 0;
    }

    /**
     * Get the max score from all grades.
     * @param {Array} grades
     * @returns {number} Max score.
     */
    function maxScore(grades) {
      var scores = _filteredScores(grades);
      var max = _.max(scores);

      return max || 0;
    }

    /**
     * Get the average score from all grades.
     * @param {Array} grades
     * @returns {number} Average score.
     */
    function meanScore(grades) {
      var scores = _filteredScores(grades);

      return _.mean(scores) || 0;
    }

    /**
     * Filter scores to only numeric values. This way empties don't throw our values off.
     * @param {Array} grades
     * @returns {Array} Array of filtered scores.
     * @private
     */
    function _filteredScores(grades) {
      var mappedScores = _.map(grades, 'score');

      return _.filter(mappedScores, function(score) {
        return _.isNumber(score);
      });
    }
  }
})();
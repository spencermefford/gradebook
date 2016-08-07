'use strict';

describe('gradebookApp module', function() {

  beforeEach(module('gradebookApp'));

  var grades1 = [
    {score: 1},
    {score: 2},
    {score: 3}
  ];

  var grades2 = [
    {score: 100},
    {score: 55},
    {score: null},
    {score: 0}
  ];

  var grades3 = [
    {score: 99},
    {score: 'Hello'},
    {score: 55},
    {score: -1}
  ];

  describe('GradeService.minScore()', function(){
    it('should find the correct min score', inject(function(GradeService) {
      expect(GradeService.minScore(grades1)).toEqual(1);
      expect(GradeService.minScore(grades2)).toEqual(0);
      expect(GradeService.minScore(grades3)).toEqual(-1);
    }));

    it('should handle bad inputs', inject(function(GradeService) {
      expect(GradeService.minScore(['x', 'x', 'x'])).toEqual(0);
      expect(GradeService.minScore(null)).toEqual(0);
      expect(GradeService.minScore(undefined)).toEqual(0);
      expect(GradeService.minScore(false)).toEqual(0);
      expect(GradeService.minScore({})).toEqual(0);
      expect(GradeService.minScore([])).toEqual(0);
    }));
  });

  describe('GradeService.maxScore()', function(){
    it('should find the correct max score', inject(function(GradeService) {
      expect(GradeService.maxScore(grades1)).toEqual(3);
      expect(GradeService.maxScore(grades2)).toEqual(100);
      expect(GradeService.maxScore(grades3)).toEqual(99);
    }));

    it('should handle bad inputs', inject(function(GradeService) {
      expect(GradeService.maxScore(['x', 'x', 'x'])).toEqual(0);
      expect(GradeService.maxScore(null)).toEqual(0);
      expect(GradeService.maxScore(undefined)).toEqual(0);
      expect(GradeService.maxScore(false)).toEqual(0);
      expect(GradeService.maxScore({})).toEqual(0);
      expect(GradeService.maxScore([])).toEqual(0);
    }));
  });

  describe('GradeService.meanScore()', function(){
    it('should find the correct mean score', inject(function(GradeService) {
      expect(GradeService.meanScore(grades1)).toEqual(2);
      expect(GradeService.meanScore(grades2)).toEqual(155/3);
      expect(GradeService.meanScore(grades3)).toEqual(51);
    }));

    it('should handle bad inputs', inject(function(GradeService) {
      expect(GradeService.meanScore(['x', 'x', 'x'])).toEqual(0);
      expect(GradeService.meanScore(null)).toEqual(0);
      expect(GradeService.meanScore(undefined)).toEqual(0);
      expect(GradeService.meanScore(false)).toEqual(0);
      expect(GradeService.meanScore({})).toEqual(0);
      expect(GradeService.meanScore([])).toEqual(0);
    }));
  });

  describe('GradeService._filteredScores()', function(){
    it('should filter the scores', inject(function(GradeService) {
      expect(GradeService._filteredScores(grades1)).toEqual([1, 2, 3]);
      expect(GradeService._filteredScores(grades2)).toEqual([100, 55, 0]);
      expect(GradeService._filteredScores(grades3)).toEqual([99, 55, -1]);
    }));

    it('should handle bad inputs', inject(function(GradeService) {
      expect(GradeService._filteredScores(['x', 'x', 'x'])).toEqual([]);
      expect(GradeService._filteredScores(null)).toEqual([]);
      expect(GradeService._filteredScores(undefined)).toEqual([]);
      expect(GradeService._filteredScores(false)).toEqual([]);
      expect(GradeService._filteredScores({})).toEqual([]);
      expect(GradeService._filteredScores([])).toEqual([]);
    }));
  });
});
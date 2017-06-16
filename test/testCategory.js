var should = require('chai').should();
var assignCategory = require('../public/assets/js/category');

// tests assignCategory function using mocha and chai
describe('BuJo Dojo Functions', function () {
  describe('Assign Category', function () {
    it('should assign bullet when task/complete', function () {
      assignCategory('task', false).should.equal('fa-square-o');
    });

    it('should assign blank when event/complete', function () {
      assignCategory('event', false).should.equal('fa-circle-o');
    });

    it('should assign blank when note/complete', function () {
      assignCategory('note', false).should.equal('fa-star-o');
    });

    it('should assign bullet when task/not complete', function () {
      assignCategory('task', true).should.equal('fa-check-square');
    });

    it('should assign blank when event/not complete', function () {
      assignCategory('event', true).should.equal('fa-check-circle');
    });

    it('should assign blank when note/not complete', function () {
      assignCategory('note', true).should.equal('fa-star');
    });
  });
});

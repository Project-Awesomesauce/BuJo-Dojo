var expect = require('chai').expect;
var assignCategory = require('../public/assets/js/category');

describe('BuJo Dojo Functions', function () {
  describe('Assign Category', function () {
    it('should assign bullet when task/complete', function () {
      expect(assignCategory('task', true).to.equal('bullet'));
    });

    it('should assign blank when event/complete', function () {
      expect(assignCategory('event', true)).to.equal('circle');
    });

    it('should assign blank when note/complete', function () {
      expect(assignCategory('note', true)).to.equal('dash');
    });

    it('should assign bullet when task/not complete', function () {
      expect(assignCategory('task', false).to.equal('bullet-crossed'));
    });

    it('should assign blank when event/not complete', function () {
      expect(assignCategory('event', false)).to.equal('circle-crossed');
    });

    it('should assign blank when note/not complete', function () {
      expect(assignCategory('note', false)).to.equal('dash-crossed');
    });
  });
});

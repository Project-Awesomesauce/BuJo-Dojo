var expect = require('chai').expect;
var assignCategory = require('../public/assets/js/index');

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
  });
});

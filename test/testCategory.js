var expect = require('chai').expect;
var assignCategory = require('../public/assets/js/index');

describe('BuJo Dojo Functions', function () {
  describe('Assign Category', function () {
    it('should assign bullet when todo/complete', function () {
      expect(assignCategory(true, 'task').to.equal('bullet'));
    });

    it('should ')
  });
});

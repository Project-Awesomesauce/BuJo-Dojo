var Nightmare = require('nightmare');
var should = require('chai').should();

describe('BuJo Dojo', function () {
  this.timeout(15000);

  var url = 'http://localhost:8080';
  describe('Start page', function () {
    it('should show form when loaded', function (done) {
      new Nightmare({ show: true })
        .goto(url)
        .evaluate(function () {
          return document.querySelectorAll('form').length;
        })
        .then(function (result) {
          result.should.equal(1);
          done();
        });
    });
  });

  describe('Daily Page', function () {
    it('should display current tasks', function (done) {
      new Nightmare({ show: true })
        .goto(url)
        .type('[name=item]', 'Test Nightmare')
        .click('[id=add-item')
        .wait('#item-list')
        .evaluate(function () {
          return document.querySelectorAll('#item-list .list-item')[0].innerText;
        })
        .then(function (result) {
          result.should.equal('Test Nightmare');
          done();
        });
    });
  });
})
;

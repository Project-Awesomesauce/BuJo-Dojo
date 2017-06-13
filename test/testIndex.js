var Nightmare = require('nightmare');
var should = require('chai').should();
var $ = require('jquery');

describe('BuJo Dojo Forms', function () {
  this.timeout(15000);

  var url = 'http://localhost:8080';

  describe('Start Page', function () {
    it('should show form when loaded', function (done) {
      new Nightmare({})
        .goto(url)
        .evaluate(function () {
          return document.querySelectorAll('form').length;
        })
        .end()
        .then(function (result) {
          result.should.equal(1);
          done();
        });
    });
  });

  describe('Add Button', function () {
    it('should add an item to the end of task list', function (done) {
      var expected = 'Test 42';
      new Nightmare({})
        .goto(url)
        .type('[name=item]', expected)
        .click('#add-item')
        .goto(url)
        .evaluate(function () {
          var items = document.querySelectorAll('#item-list .list-item');
          return items[items.length - 1].innerText;
        })
        .then(function (result) {
          result.should.equal(expected);
          done();
        });
    });

    it('should not allow a user to enter an empty string', function (done) {
      var expected = '';
      new Nightmare({})
        .goto(url)
        .type('[name=item]', expected)
        .click('#add-item')
        .goto(url)
        .evaluate(function () {
          var items = document.querySelectorAll('#item-list .list-item');
          return items[items.length - 1].innerText;
        })
        .then(function (result) {
          result.should.not.equal(expected);
          done();
        });
    });
  });

  describe('Assign Category', function () {
    it('should assign the appropriate icon based on category chosen', function (done) {
      new Nightmare({ show: true })
      .goto(url)
      .select('#category-select', 'task')
      .type('[name=item]', 'Task Icon')
      .click('#add-item')
      .goto(url)
      .evaluate(function () {
        var icons = document.querySelectorAll('i');
        return $(icons[icons.length - 1]).attr('class');
      })
      .then(function (result) {
        console.log('result');
        result.should.equal('fa-li fa fa-square-o');
        done();
      });
    });

    it('should assign the appropriate icon based on category chosen', function (done) {
      new Nightmare({ show: true })
      .goto(url)
      .select('#category-select', 'event')
      .type('[name=item]', 'Event Icon')
      .click('#add-item')
      .goto(url)
      .evaluate(function () {
        var icons = document.querySelectorAll('i');
        return $(icons[icons.length - 1]).attr('class');
      })
      .then(function (result) {
        console.log('result');
        result.should.equal('fa-li fa fa-circle-o');
        done();
      });
    });

    it('should assign the appropriate icon based on category chosen', function (done) {
      new Nightmare({ show: true })
      .goto(url)
      .select('#category-select', 'note')
      .type('[name=item]', 'Note Icon')
      .click('#add-item')
      .goto(url)
      .evaluate(function () {
        var icons = document.querySelectorAll('i');
        return $(icons[icons.length - 1]).attr('class');
      })
      .then(function (result) {
        console.log('result');
        result.should.equal('fa-li fa fa-star-o');
        done();
      });
    });
  });

  describe('Edit Button', function () {
    it('should goto edit page for selected item', function (done) {
      new Nightmare({ show: true })
      .goto(url)
      .wait()
      .click('button .edit-item')[0]
      .evaluate(function () {
        return Nightmare.url();
      })
      .then(function (result) {
        result.should.equal('test');
        done();
      });
    });
  });
});

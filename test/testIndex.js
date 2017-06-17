var Nightmare = require('nightmare');
var should = require('chai').should();

// utilizing nightmare to test ui interaction
// further tests to be implemented for added views
describe('BuJo Dojo Forms', function () {
  this.timeout(45000);

  var url = 'http://localhost:8080/view-today';

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
      var expected = 'Event Item';
      new Nightmare({ show: true })
        .goto(url)
        .select('#category-select', 'event')
        .type('[name=item]', expected)
        .click('#add-item')
        .goto(url)
        .wait(1000)
        .end()
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
        .end()
        .then(function (result) {
          result.should.not.equal(expected);
          done();
        });
    });
  });

  describe('Edit Button', function () {
    it('should edit selected item', function (done) {
      var nightmare = new Nightmare({ show: true });
      nightmare
        .goto(url)
        .wait(500)
        .evaluate(function () {
          var editBtnArr = document.querySelectorAll('#item-list [data-completed=false] .edit-item');
          var editBtn = editBtnArr[editBtnArr.length - 1];

          editBtn.click();
        })
        .then(function () {
          var expected = 'Edited Event Item';
          nightmare.type('[name=item]', 'Edited ')
            .select('[name=completed]', 'false')
            .wait(500)
            .click('[type=submit]')
            .then(function () {
              nightmare
              .goto(url)
              .wait(500)
              .evaluate(function () {
                var completedArr = document.querySelectorAll('#item-list [data-completed=false] .list-item');
                return completedArr[completedArr.length - 1].innerText;
              })
              .then(function (result) {
                result.should.equal(expected);
                done();
              });
            });
        });
    });
  });

  describe('Delete Button', function () {
    it('should delete selected task', function (done) {
      var nightmare = new Nightmare({ show: true });

      nightmare
        .goto(url)
        .wait(500)
        .evaluate(function () {
          var btnArr = document.querySelectorAll('#item-list .destroy-item');
          var btn = btnArr[btnArr.length - 1];
          btn.click();
          return document.querySelectorAll('#item-list .list-item').length;
        })
        .then(function (itemLength) {
          nightmare.goto(url)
            .wait(1000)
            .evaluate(function () {
              return document.querySelectorAll('#item-list .list-item').length;
            })
            .then(function (result) {
              result.should.equal(itemLength - 1);
              done();
            });
        });
    });
  });

  describe('I did a thing ;)', function () {
    it('should make you smile', function (done) {
      var nightmare = new Nightmare({ show: true });

      nightmare
        .goto('http://giphy.com/go/ODZlOWQxNmMt')
        .wait(1500)
        .end()
        .then(function () {
          console.log('Have a Great Day!');
          done();
        })
        .catch(function (error) {
          console.error('Search failed:', error);
        });
    });
  });
});


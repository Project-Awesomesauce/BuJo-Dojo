// var Nightmare = require('nightmare');
// var should = require('chai').should();

// describe('BuJo Dojo Forms', function () {
//   this.timeout(15000);

//   var url = 'http://localhost:8080';

//   describe('Start Page', function () {
//     it('should show form when loaded', function (done) {
//       new Nightmare({})
//         .goto(url)
//         .evaluate(function () {
//           return document.querySelectorAll('form').length;
//         })
//         .end()
//         .then(function (result) {
//           result.should.equal(1);
//           done();
//         });
//     });
//   });

//   describe('Add Button', function () {
//     it('should add an item to the end of task list', function (done) {
//       var expected = 'Test 42';
//       new Nightmare({ show: true })
//         .goto(url)
//         .type('[name=item]', expected)
//         .click('#add-item')
//         .goto(url)
//         .evaluate(function () {
//           var items = document.querySelectorAll('#item-list .list-item');
//           return items[items.length - 1].innerText;
//         })
//         .then(function (result) {
//           result.should.equal(expected);
//           done();
//         });
//     });

//     it('should not allow a user to enter an empty string', function (done) {
//       var expected = '';
//       new Nightmare({})
//         .goto(url)
//         .type('[name=item]', expected)
//         .click('#add-item')
//         .goto(url)
//         .evaluate(function () {
//           var items = document.querySelectorAll('#item-list .list-item');
//           return items[items.length - 1].innerText;
//         })
//         .then(function (result) {
//           result.should.not.equal(expected);
//           done();
//         });
//     });
//   });
// });

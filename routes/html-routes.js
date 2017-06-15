var db = require('../models');
var moment = require('moment');

module.exports = function (app) {
  app.get('/', function (req, res) {
    db.Task.findAll({}).then(function (dbTask) {
      var hbsObject = {
        tasks: dbTask
      };
      console.log(hbsObject);
      res.render('index', hbsObject);
    });
  });

  app.get('/home', function(req, res) {
    res.render('home');
  })

  app.get('/edit/:id', function (req, res) {
    db.Task.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbTask) {
      var hbsObject = {
        tasks: dbTask
      };
      console.log(hbsObject);
      res.render('edit', hbsObject);
    });
  });
  
  app.get('/contact', function (req, res) {
    res.render('contact');
  });

  app.get('/thanks', function (req, res) {
    res.render('thanks');
  });

  // Route for viewing today's date
  app.get('/view-today', function(req, res) {
    db.Task.findAll({
      where: {
        setDate: moment().format('YYYY-MM-DD')
      }
    }).then(function(dbTask) {
      var hbsObject = {
        tasks: dbTask
      };
      res.render('date', hbsObject);
      console.log(dbTask);
    });
  });

  // Route for viewing a specific date
  app.get('/view-date/:date', function(req, res) {
    db.Task.findAll({
      where: {
        setDate: req.params.date
      }
    }).then(function(dbTask) {
      var hbsObject = {
        tasks: dbTask
      };
      res.render('date', hbsObject);
    });
  });
};

var db = require('../models');
var moment = require('moment');

module.exports = function (app) {
  app.get('/', function (req, res) {
    db.Task.findAll({}).then(function (dbTask) {
      var hbsObject = {
        tasks: dbTask
      };
      res.render('home', hbsObject);
    });
  });

  app.get('/view-month', function (req, res) {
    res.render('coming-soon');
  });

  app.get('/future-log', function (req, res) {
    res.render('coming-soon');
  });

  app.get('/edit/:id', function (req, res) {
    db.Task.findOne({
      where: {
        id: req.params.id
      }
    }).then(function (dbTask) {
      var date = moment(dbTask.dataValues.setDate).add(6, 'hours').format('YYYY-MM-DD');
      var hbsObject = {
        tasks: dbTask,
        date: date
      };
      console.log(date);
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
  app.get('/view-today', function (req, res) {
    db.Task.findAll({
      where: {
        setDate: moment().format('YYYY-MM-DD')
      }
    }).then(function (dbTask) {
      var hbsObject = {
        tasks: dbTask
      };
      res.render('date', hbsObject);
    });
  });

  // Route for viewing a specific date
  app.get('/view-date/:date', function (req, res) {
    db.Task.findAll({
      where: {
        setDate: req.params.date
      }
    }).then(function (dbTask) {
      var hbsObject = {
        tasks: dbTask,
        date: req.params.date
      };
      res.render('date', hbsObject);
    });
  });

  // Route for weekly view
  // promise chain allows us to pull each day of the week in one get
  app.get('/view-week', function (req, res) {
    db.Task.findAll({
      where: {
        setDate: moment().isoWeekday(1).format('YYYY-MM-DD')
      }
    }).then(function (dayOne) {
      db.Task.findAll({
        where: {
          setDate: moment().isoWeekday(2).format('YYYY-MM-DD')
        }
      }).then(function (dayTwo) {
        db.Task.findAll({
          where: {
            setDate: moment().isoWeekday(3).format('YYYY-MM-DD')
          }
        }).then(function (dayThree) {
          db.Task.findAll({
            where: {
              setDate: moment().isoWeekday(4).format('YYYY-MM-DD')
            }
          }).then(function (dayFour) {
            db.Task.findAll({
              where: {
                setDate: moment().isoWeekday(5).format('YYYY-MM-DD')
              }
            }).then(function (dayFive) {
              db.Task.findAll({
                where: {
                  setDate: moment().isoWeekday(6).format('YYYY-MM-DD')
                }
              }).then(function (daySix) {
                db.Task.findAll({
                  where: {
                    setDate: moment().isoWeekday(7).format('YYYY-MM-DD')
                  }
                }).then(function (daySeven) {
                  var hbsObject = {
                    dayOne: dayOne,
                    dayTwo: dayTwo,
                    dayThree: dayThree,
                    dayFour: dayFour,
                    dayFive: dayFive,
                    daySix: daySix,
                    daySeven: daySeven
                  };
                  res.render('week', hbsObject);
                });
              });
            });
          });
        });
      });
    });
  });
};

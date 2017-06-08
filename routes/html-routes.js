var db = require('../models');

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
};

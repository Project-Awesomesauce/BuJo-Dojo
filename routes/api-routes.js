var db = require('../models');

module.exports = function (app) {
  app.get('/api/tasks', function (req, res) {
    db.Task.findAll({}).then(function (dbTask) {
      res.json(dbTask);
    });
  });

  app.post('/api/tasks', function (req, res) {
    db.Task.create({
      item: req.body.item,
      category: req.body.category,
      setDate: req.body.date
    }).then(function (dbTask) {
      res.json(dbTask);
    });
  });

  // Put route for changing a task's completed status
  app.put('/api/tasks/:id', function (req, res) {
    db.Task.update({
      completed: true
    }, {
      where: {
        id: req.params.id
      }
    }).then(function (dbTask) {
      res.json(dbTask);
    });
  });

  // Put route for editing a task
  app.put('/api/tasks', function (req, res) {
    db.Task.update(
    req.body,
      {
        where: {
          id: req.body.id
        }
      }).then(function (dbTask) {
        res.json(dbTask);
      });
  });

  app.delete('/api/tasks/:id', function (req, res) {
    db.Task.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbTask) {
      res.json(dbTask);
    });
  });
};

var db = require('../models');

module.exports = function(app) {

  app.get('/api/tasks', function(req, res) {
    db.Task.findAll({}).then(function(dbTask) {
  	  res.json(dbTask);
    });
  });

  app.post('/api/tasks', function(req, res) {
	db.Task.create({
	  item: req.body.item
	  // setDate: ???
	}).then(function(dbTask) {
   	  res.json(dbTask);
	});
  });

  app.update('/api/tasks/:item', function(req, res) {
	var taskItem = req.params.item;
	app.update({
	  completed: true
	}, { 
	  where : {
	    item: taskItem
	  }
	}).then(function(dbTask) {
	  res.json(dbTask);
	});
  });

  app.delete('api/tasks/:item', function(req, res) {
    db.Task.destroy({
  	  where: {
  	    item: req.params.item
  	  }
    }).then(function(dbTask) {
  	  res.json(dbTask);
    });
  });

};
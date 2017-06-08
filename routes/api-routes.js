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

  // Put route for changing a task's completed status
  app.put('/api/tasks/:item', function(req, res) {
	db.Task.update({
	  completed: true
	}, { 
	  where : {
	    item: req.params.item
	  }
	}).then(function(dbTask) {
	  res.json(dbTask);
	});
  });

  // Put route for editing a task
  app.put('/api/tasks', function(req, res) {
	db.Task.update(
	  req.body,
	  {
	  	where : {
	      item: req.body.item
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
var moment = require('moment');

module.exports = function (sequelize, DataTypes) {
  var Task = sequelize.define('Task', {
    item: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1],
        notEmpty: true
      }
    },
    category: {
      type: DataTypes.STRING,
      notNull: true,
      defaultValue: 'task'
    },
    completed: {
      type: DataTypes.BOOLEAN,
      notNull: true,
      defaultValue: false
    },
    setDate: {
      type: DataTypes.DATEONLY,
      allowNull: false,
      defaultValue: moment().format('YYYY-MM-DD')
    }
  });
  return Task;
};

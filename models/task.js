var moment = require('moment');

module.exports = function(sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
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
            notNull: true
            //defaultValue: "task"
        },
        completed: {
            type: DataTypes.BOOLEAN,
            notNull: true,
            defaultValue: false
        },
        // Updated to allow for date views!!!
        setDate: {
            type: DataTypes.DATE,
            allowNull: false,
            defaultValue: moment().format('YYYY-MM-DD')
        }
    });
    return Task;
};
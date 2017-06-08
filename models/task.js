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
        completed: {
            type: DataTypes.BOOLEAN,
            notNull: true,
            defaultValue: false
        },
        setDate: {
            type: DataTypes.STRING,
            allowNull: true
                // To make setDate default to current date, use the following code instead:
                // type: DataTypes.DATE,
                // allowNull: false,
                // defaultValue: DataTypes.NOW
                // Leaving this commented in case we use a calendar option and would prefer a Unix date string.
        }
    });
    return Task;
};
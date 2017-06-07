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
            // Insert defaultValue here eventually
        }
    });
    return Task;
};
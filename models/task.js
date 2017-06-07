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
            // Insert defaultValue here eventually? Issue would also (likely) be solved by implementing
            // a calendar for user to select from that defaults to the current date.
        }
    });
    return Task;
};
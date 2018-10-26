module.exports = function(sequelize, DataTypes) {
  const Trip = sequelize.define("Trip", {
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    endDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  });

  Trip.associate = models => {
    // Each trip will be belong to a User
    Trip.belongsTo(models.User {
      foreignKey: {
        allowNull: false
      }
    });
    // Each trip will have many destinations
    Trip.hasMany(models.Destination);
  };

  return Trip;
};
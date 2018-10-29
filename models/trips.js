module.exports = function (sequelize, DataTypes) {
  const Trips = sequelize.define("Trips", {
    tripName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", "i"],
        len: [1]
      }
    },
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
    tripStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tripEndDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  });

  Trips.associate = function (models) {

    Trips.hasMany(models.Destinations, {
      onDelete: "cascade"
    });

    Trips.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Trips;
};
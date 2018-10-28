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
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
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
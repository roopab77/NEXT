<<<<<<< HEAD
module.exports = function(sequelize, DataTypes) {
  const Trip = sequelize.define("Trip", {
=======
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
>>>>>>> 6e888e72036b2f30c232987ab220abdd0c193c2d
    completed: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: false
    },
<<<<<<< HEAD
    startDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    endDate: {
=======
    tripStartDate: {
      type: DataTypes.DATEONLY,
      allowNull: false
    },
    tripEndDate: {
>>>>>>> 6e888e72036b2f30c232987ab220abdd0c193c2d
      type: DataTypes.DATEONLY,
      allowNull: false
    }
  });

<<<<<<< HEAD
  Trip.associate = models => {
    // Each trip will be belong to a User
    Trip.belongsTo(models.User {
=======
  Trips.associate = function (models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Trips.hasMany(models.Destinations, {
      onDelete: "cascade"
    });

    Trips.belongsTo(models.Users, {
>>>>>>> 6e888e72036b2f30c232987ab220abdd0c193c2d
      foreignKey: {
        allowNull: false
      }
    });
<<<<<<< HEAD
    // Each trip will have many destinations
    Trip.hasMany(models.Destination);
  };

  return Trip;
=======
  };

  return Trips;
>>>>>>> 6e888e72036b2f30c232987ab220abdd0c193c2d
};
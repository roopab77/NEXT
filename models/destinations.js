module.exports = function(sequelize, DataTypes) {
  var Destinations = sequelize.define("Destinations", {
    destinationCountry: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", "i"],
        len: [1]
      }
    },
    destinationState: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        is: ["^[a-z]+$", "i"],
        len: [1]
      }
    },
    destinationCity: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        validate: {
          is: ["^[a-z]+$", "i"],
          len: [1]
        }
      }
    },
    dateFrom: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
      allowNull: false
    },
    dateTO: {
      type: DataTypes.DATEONLY,
      defaultValue: DataTypes.NOW,
      allowNull: false
    }
  });

  Destinations.associate = function(models) {
    // We're saying that a Post should belong to an Author
    // A Post can't be created without an Author due to the foreign key constraint
    Destinations.belongsTo(models.Users, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Destinations;
};

module.exports = function (sequelize, DataTypes) {
  const Reviews = sequelize.define("Reviews", {
    titleCategory: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: ["^[a-z]+$", "i"],
        len: [1, 30]
      }
    },
    review: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1,
        max: 5
      }
    }
  });

  Reviews.associate = function (models) {
    // We're saying that a reviews should belong to destinations
    // A review can't be created without a destinations due to the foreign key constraint
    Reviews.belongsTo(models.Destinations, {
      foreignKey: {
        allowNull: false
      }
    })
  };
  return Reviews;
};
module.exports = function (sequelize, DataTypes) {
  var Users = sequelize.define("Users", {
    firstname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    lastname: {
      type: DataTypes.STRING,
      allowNull: false
    },
    email: {
      type: DataTypes.STRING,
      validate: {
        isEmail: true
      }
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });
  Users.associate = function(models) {
    // Associating Author with Posts
    // When an Author is deleted, also delete any associated Posts
    Users.hasMany(models.Destinations, {
      onDelete: "cascade"
    });
  };
  return Users;
};

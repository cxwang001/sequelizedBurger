module.exports = function(sequelize, DataTypes) {
  var Burger = sequelize.define("burger", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1, 50]
      }
    },
    devour: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });
  return Burger;
};
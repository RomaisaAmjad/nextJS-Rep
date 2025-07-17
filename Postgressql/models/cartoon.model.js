const { getUnixTime } = require("date-fns");

module.exports = (sequelize, DataTypes) => {
  const Cartoon = sequelize.define(
    "Cartoon",
    {
      id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true,
      },
      title: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      character: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataTypes.DATE,
      },
      updatedAt: {
        type: DataTypes.DATE,
      },
    },
    {
      tableName: "cartoons",
    }
  );

  Cartoon.beforeCreate((cartoon) => {
  const unixDate = getUnixTime(new Date());
  cartoon.createdAt = unixDate;
  cartoon.updatedAt = unixDate;
});


  return Cartoon;
};

import { DataTypes } from "sequelize";
import db from "../utils/conecction.js";
import Item from "./ItemModel.js";

const User = db.define(
  //memberikan nama model dengan nama user, secara default jika tidak memberikan tablename maka akan menjadi nama jamak
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    }
  },
  {
    tableName: "user",
  }
);
//artinya user bisa memiliki banyak buku
User.hasMany(Item, {
  //cascade digunakan ketika data di tabel referensi dihapus,maka data yang terkait di tabel ini juga akan dihapus
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});
//buku dimiliki satu user
Item.belongsTo(User, {
  foreignKey: "UserId",
  onDelete: "CASCADE",
  onUpdate: "CASCADE",
});

export default User;

import { DataTypes } from "sequelize";
import db from "../utils/conecction.js";

const Item = db.define(
  //memberikan nama model dengan nama book, secara default jika tidak memberikan tablename maka akan menjadi nama jamak
  "Item",
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
    rasa_tembakau: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    harga: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  },
  {
    tableName: "item",
  }
);

export default Item;

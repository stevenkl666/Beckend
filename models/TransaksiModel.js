import { DataTypes } from "sequelize";
import Admin from "./adminModels.js";
import db from "../utils/conecction.js";
import Item from "./ItemModel.js";
import User from "./UserModel.js";
// import db from "../utils/connection.js";

const Transaksi = db.define(
  "Pembayaran",
  {
    id_transksi: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    metode_transksi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    tanggal_transaksi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    jumlah_transaksi: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  },
  {
    tableName: "Transaksi",
    // timestamps: true,
  }
);

// Relasi Pembayaran ke Sales
// Pembayaran.belongsTo(Sales, { foreignKey: 'id_sales' });

export default Transaksi;

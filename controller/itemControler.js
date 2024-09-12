import { response } from "express";
import { Sequelize } from "sequelize";
import Item from "../models/ItemModel.js";

export const getAllItem = async (req, res) => {
  try {
    const data = await Item.findAll();
    res.status(200).json(data);
  } catch (err) {
    res.send(err);
  }
};
export const createItem = async (req, res) => {
  try {
    const { name, rasa_tembakau, harga } = req.body;
    const createData = await Item.create({ name, rasa_tembakau, harga });
    res.send(200).json(createData);
    // response(201, res, createData, "data ditambahkan");
  } catch (err) {
    // response(500, res, err);
  }
};

export const updateItem = async (req, res) => {
  try {
    const { name, rasa_tembakau, harga } = req.body;
    const data = await Item.update(
      { name, rasa_tembakau, harga },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    //  response(200, res, "data berhasil diupdate");
  } catch (err) {
    //  response(500, res, err.message);
  }
};

export const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Item.destroy({ where: { id } });
    res.status(200).json({ message: "data dihapus" });
  } catch (err) {
    // response(500, res, err.message);
    res.json(err);
  }
};

import { response } from "express";
import { Sequelize } from "sequelize";
import Admin from "../models/adminModels.js";

export const getAllAdmin = async (req, res) => {
  try {
    const data = await Admin.findAll();
    res.send(data);
  } catch (err) {
    res.send(err);
  }
};
export const createAdmin = async (req, res) => {
  try {
    const { nama, email, password } = req.body;
    const creteData = await Admin.create({ nama, email, password });
    // response(201, res, createData, "data ditambahkan");
    res.send(creteData);
  } catch (err) {
    res.send(creteData);
  }
};

export const updateAdmin = async (req, res) => {
  try {
    const { nama, email, password } = req.body;
    const data = await Admin.update(
      { nama, email, password },
      {
        where: {
          id: req.params.id,
        },
      }
    );
    res.send(data);
  } catch (err) {
    res.send(data);
  }
};

export const deleteAdmin = async (req, res) => {
  try {
    const { id } = req.params;
    const data = await Admin.destroy({ where: { id } });
    res.status(200).json({ message: "data dihapus" });
  } catch (err) {
    res.send(err);
  }
};
